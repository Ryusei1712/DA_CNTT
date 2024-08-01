import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function EmployeeTable({ employees, handleEdit, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Mã nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Tên nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Email</HighlightedTableCell>
                        <HighlightedTableCell>Chức vụ</HighlightedTableCell>
                        <HighlightedTableCell>Trạng thái</HighlightedTableCell>
                        <HighlightedTableCell>Hành động</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee) => (
                        <TableRow key={employee.employeeCode}>
                            <TableCell>{employee.employeeCode}</TableCell>
                            <TableCell>{employee.employeeName}</TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>{employee.position}</TableCell>
                            <TableCell>{employee.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(employee)}>Sửa</Button>
                                <Button onClick={() => handleDelete(employee.employeeCode)}>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmployeeTable;
