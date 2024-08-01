import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function LeaveRequestTable({ leaveRequests, handleEdit, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Mã nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Tên nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Email</HighlightedTableCell>
                        <HighlightedTableCell>Chức vụ</HighlightedTableCell>
                        <HighlightedTableCell>Lý do</HighlightedTableCell>
                        <HighlightedTableCell>Loại yêu cầu</HighlightedTableCell>
                        <HighlightedTableCell>Hành động</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {leaveRequests.map((request) => (
                        <TableRow key={request.employeeCode}>
                            <TableCell>{request.employeeCode}</TableCell>
                            <TableCell>{request.employeeName}</TableCell>
                            <TableCell>{request.email}</TableCell>
                            <TableCell>{request.position}</TableCell>
                            <TableCell>{request.reason}</TableCell>
                            <TableCell>{request.requestType}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(request)}>Sửa</Button>
                                <Button onClick={() => handleDelete(request.employeeCode)}>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default LeaveRequestTable;
