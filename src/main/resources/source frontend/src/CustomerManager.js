import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function CustomerManager({ customerManagers}) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>ID</HighlightedTableCell>
                        <HighlightedTableCell>Tên công ty</HighlightedTableCell>
                        <HighlightedTableCell>Mã công ty</HighlightedTableCell>
                        <HighlightedTableCell>Địa chỉ</HighlightedTableCell>
                        <HighlightedTableCell>Người đại diện</HighlightedTableCell>
                        <HighlightedTableCell>Số điện thoại</HighlightedTableCell>
                        <HighlightedTableCell>Ngày đặt</HighlightedTableCell>
                        <HighlightedTableCell>Ghi chú</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Buoc 2 */}
                    {customerManagers.map((customerManager) => (
                        <TableRow key={customerManager.identity}>
                            <TableCell>{customerManager.compName}</TableCell>
                            <TableCell>{customerManager.compID}</TableCell>
                            <TableCell>{customerManager.compAddr}</TableCell>
                            <TableCell>{customerManager.prePerson}</TableCell>
                            <TableCell>{customerManager.phoneNum}</TableCell>
                            <TableCell>{customerManager.orderDate}</TableCell>
                            <TableCell>{customerManager.notes}</TableCell>
                            
            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomerManager;
