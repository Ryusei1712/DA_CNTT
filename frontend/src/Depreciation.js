import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function Depreciation({ depreciations, handleConfirmEdit, setDialogType, setDepreciationInfo }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Tên dây chuyền</HighlightedTableCell>
                        <HighlightedTableCell>Số lần bị hủy</HighlightedTableCell>
                        <HighlightedTableCell>Trạng thái</HighlightedTableCell>
                        <HighlightedTableCell>Thao tác</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Buoc 2 */}
                    {depreciations.map((depreciation) => (
                        <TableRow key={depreciation.id}>
                            <TableCell>{depreciation.productRun}</TableCell>
                            <TableCell>{depreciation.numberOfCancellations}</TableCell>
                            <TableCell>{depreciation.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => {
                                    setDialogType("depreciation");
                                    setDepreciationInfo(depreciation);
                                    handleConfirmEdit();
                                }}>
                                    Hủy
                                </Button>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Depreciation;
