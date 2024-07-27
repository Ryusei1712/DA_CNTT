import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function QualityControl({ qualityControls, handleEdit, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Người kiểm tra</HighlightedTableCell>
                        <HighlightedTableCell>Tên dây chuyền</HighlightedTableCell>
                        <HighlightedTableCell>Kết quả chất lượng</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Buoc 2 */}
                    {qualityControls.map((qualityControl) => (
                        <TableRow key={qualityControl.inspector}>
                            <TableCell>{qualityControl.productRun}</TableCell>
                            <TableCell>{qualityControl.qualityResult}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(qualityControl)}>Duyệt</Button>
                                <Button onClick={() => handleDelete(qualityControl.inspector)}>Hủy</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default QualityControl;
