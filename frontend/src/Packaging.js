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
                        <HighlightedTableCell>Người duyệt</HighlightedTableCell>
                        <HighlightedTableCell>Chất lượng</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Buoc 2 */}
                    {packagings.map((packaging) => (
                        <TableRow key={packaging.id}>
                            <TableCell>{packaging.packagingDate}</TableCell>
                            <TableCell>{packaging.productID}</TableCell>
                            <TableCell>{packaging.productRun}</TableCell>
                            <TableCell>{packaging.inspector}</TableCell>
                            <TableCell>{packaging.quality}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Packaging;
