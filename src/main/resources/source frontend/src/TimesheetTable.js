import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function TimesheetTable({ timesheets, handleEdit, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Mã nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Ngày</HighlightedTableCell>
                        <HighlightedTableCell>Giờ làm việc</HighlightedTableCell>
                        <HighlightedTableCell>Trạng thái</HighlightedTableCell>
                        <HighlightedTableCell>Hành động</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {timesheets.map((timesheet) => (
                        <TableRow key={timesheet.employeeId}>
                            <TableCell>{timesheet.employeeId}</TableCell>
                            <TableCell>{timesheet.date}</TableCell>
                            <TableCell>{timesheet.hoursWorked}</TableCell>
                            <TableCell>{timesheet.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(timesheet)}>Sửa</Button>
                                <Button onClick={() => handleDelete(timesheet.employeeId)}>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TimesheetTable;
