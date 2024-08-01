import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function ProductManager({ productManagers}) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Mã sản phẩm</HighlightedTableCell>
                        <HighlightedTableCell>Ngày sản xuất</HighlightedTableCell>
                        <HighlightedTableCell>Tên sản phẩm</HighlightedTableCell>
                        <HighlightedTableCell>Loại sản phẩm</HighlightedTableCell>
                        <HighlightedTableCell>Số lượng</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Buoc 2 */}
                    {productManagers.map((productManager) => (
                        <TableRow key={productManager.id}> 
                            <TableCell>{productManager.productID}</TableCell>
                            <TableCell>{productManager.pakagingDate}</TableCell>
                            <TableCell>{productManager.productName}</TableCell>
                            <TableCell>{productManager.productType}</TableCell>
                            <TableCell>{productManager.productQuantity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductManager;
