import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function Packaging({ packagings }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Ngày sản xuất</HighlightedTableCell>
                        <HighlightedTableCell>Mã sản phẩm</HighlightedTableCell>
                        <HighlightedTableCell>Tên dây chuyền</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Buoc 2 */}
                    {packagings.map((packaging) => (
                        <TableRow key={packaging.packagingDate}>
                            <TableCell>{packaging.packagingDate}</TableCell>
                            <TableCell>{packaging.productID}</TableCell>
                            <TableCell>{packaging.productRun}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Packaging;
