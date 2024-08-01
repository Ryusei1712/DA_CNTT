import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function Depreciation({ depreciations, handleDelete }) {
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
                        <TableRow key={depreciation.productRun}>
                            <TableCell>{depreciation.productRun}</TableCell>
                            <TableCell>{depreciation.numberOfCancellations}</TableCell>
                            <TableCell>{depreciation.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleDelete(depreciation.productRun)}>Hủy</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Depreciation;
