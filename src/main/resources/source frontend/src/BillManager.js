import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,  } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function BillManager({ billManagers, handleEdit}) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Số thứ tự</HighlightedTableCell>
                        <HighlightedTableCell>Tên công ty</HighlightedTableCell>
                        <HighlightedTableCell>Mã công ty</HighlightedTableCell>
                        <HighlightedTableCell>Địa chỉ</HighlightedTableCell>
                        <HighlightedTableCell>Ngày đặt</HighlightedTableCell>
                        <HighlightedTableCell>Số tiền</HighlightedTableCell>
                        <HighlightedTableCell>Sau thuế</HighlightedTableCell>
                        <HighlightedTableCell>Chiết khấu</HighlightedTableCell>
                        <HighlightedTableCell>Tổng tiền</HighlightedTableCell>
                        <HighlightedTableCell>Thao tác</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {billManagers.map((billManager) => (
                        <TableRow key={billManager.id}> 
                            <TableCell>{billManager.identity}</TableCell>
                            <TableCell>{billManager.compName}</TableCell>
                            <TableCell>{billManager.compID}</TableCell>
                            <TableCell>{billManager.compAddr}</TableCell>
                            <TableCell>{billManager.OrderDate}</TableCell>
                            <TableCell>{billManager.productPrice}</TableCell>
                            <TableCell>{billManager.productTax}</TableCell>
                            <TableCell>{billManager.productSale}</TableCell>
                            <TableCell>{billManager.productBill}</TableCell>
                            <TableCell>{billManager.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(billManager)}>Xuất Hóa Đơn</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BillManager;
