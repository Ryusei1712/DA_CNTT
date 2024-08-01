import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function SalesManager({ salesManagers, handleEdit }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableHead >•	Quý 1 (các tháng 1-2-3-4) </TableHead>
                <TableHead>--------------------------------------------------</TableHead>
                <TableHead >•	Quý 2 (các tháng 5-6-7-8) </TableHead>
                <TableHead>--------------------------------------------------</TableHead>
                <TableHead >•	Quý 3 (các tháng 9-10-11-12)</TableHead>
                <TableHead>--------------------------------------------------</TableHead>
                    <TableRow>
                        <HighlightedTableCell>Tên quý</HighlightedTableCell>
                        <HighlightedTableCell>Tổng đơn hàng</HighlightedTableCell>
                        <HighlightedTableCell>Tổng doanh thu</HighlightedTableCell>
                        <HighlightedTableCell>Thao tác</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   
                    {salesManagers.map((salesManager) => (
                        <TableRow key={salesManager.id}>
                            <TableCell>{salesManager.nameBill}</TableCell>
                            <TableCell>{salesManager.totalBill}</TableCell>
                            <TableCell>{salesManager.totalCompBill}</TableCell>
                            <TableCell>{salesManager.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(salesManager)}>Xuất báo cáo</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SalesManager;
