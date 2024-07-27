import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function ViolationTable({ violations, handleEdit, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Mã nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Tên nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Loại vi phạm</HighlightedTableCell>
                        <HighlightedTableCell>Mức độ nghiêm trọng</HighlightedTableCell>
                        <HighlightedTableCell>Trạng thái</HighlightedTableCell>
                        <HighlightedTableCell>Hành động</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {violations.map((violation) => (
                        <TableRow key={violation.employeeId}>
                            <TableCell>{violation.employeeId}</TableCell>
                            <TableCell>{violation.employeeName}</TableCell>
                            <TableCell>{violation.violationType}</TableCell>
                            <TableCell>{violation.severity}</TableCell>
                            <TableCell>{violation.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(violation)}>Sửa</Button>
                                <Button onClick={() => handleDelete(violation.employeeId)}>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ViolationTable;
