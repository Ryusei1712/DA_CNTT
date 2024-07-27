import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function ProductDM({ productDMs, handleEdit, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Tên nguyên liệu</HighlightedTableCell>
                        <HighlightedTableCell>Số lượng</HighlightedTableCell>
                        <HighlightedTableCell>Đơn vị đo</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Buoc 2 */}
                    {productDMs.map((productDM) => (
                        <TableRow key={productDM.productDMName}>
                            <TableCell>{productDM.productDMQuantity}</TableCell>
                            <TableCell>{productDM.productDMUnit}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(productDM)}>Sửa</Button>
                                <Button onClick={() => handleDelete(productDM.productDMName)}>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductDM;
