import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function QualityControl({ qualityControls, handleDialogOpen, handleDelete, setQualityControlInfo,handleConfirmEdit ,setDialogType}) {
    // Tạo một state để theo dõi trạng thái của các nút
    const [disabledButtons, setDisabledButtons] = useState({});

    // Sử dụng useEffect để kiểm tra và cập nhật trạng thái disable khi trang được load
    useEffect(() => {
        const initialDisabledButtons = {};
        qualityControls.forEach((qualityControl) => {
            if (qualityControl.approved) {
                initialDisabledButtons[qualityControl.id] = true;
            }
        });
        setDisabledButtons(initialDisabledButtons);
    }, [qualityControls]);

    // Hàm xử lý sự kiện khi nhấn nút Duyệt
    const handleDuyetClick = (qualityControl) => {
        const productRun = qualityControl.productRun;
        const quality = qualityControl.qualityResult;
        const str = qualityControl.productRun;
        const number = str.replace(/\D/g, '');
        const currentDate = new Date().toISOString().split('T')[0];
        const productID = number.padStart(3, '0') + currentDate;
        handleDialogOpen('packaging', { productRun, quality, productID });
        const updatedQualityControl = {
            ...qualityControl,
            approved: true
        };
        // setDialogType("qualityControl");
        // setQualityControlInfo(updatedQualityControl);
        // handleConfirmEdit();
        // setDisabledButtons((prevState) => ({
        //     ...prevState,
        //     [qualityControl.id]: true,
        // }));
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Người kiểm tra</HighlightedTableCell>
                        <HighlightedTableCell>Tên dây chuyền</HighlightedTableCell>
                        <HighlightedTableCell>Kết quả chất lượng</HighlightedTableCell>
                        <HighlightedTableCell>Ngày kiểm tra</HighlightedTableCell>
                        <HighlightedTableCell>Thao tác</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {qualityControls.map((qualityControl) => (
                        <TableRow key={qualityControl.id}>
                            <TableCell>{qualityControl.inspector}</TableCell>
                            <TableCell>{qualityControl.productRun}</TableCell>
                            <TableCell>{qualityControl.qualityResult}</TableCell>
                            <TableCell>{qualityControl.resultDate}</TableCell>
                            <TableCell>
                                <Button
                                    onClick={() => handleDuyetClick(qualityControl)}
                                    disabled={disabledButtons[qualityControl.id]}
                                >
                                    Duyệt
                                </Button>
                                <Button onClick={() => handleDelete(qualityControl.id)}>Hủy kết quả</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default QualityControl;
