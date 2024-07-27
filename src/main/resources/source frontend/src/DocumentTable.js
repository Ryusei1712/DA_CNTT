import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function DocumentTable({ documents, handleEdit, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Loại chứng từ</HighlightedTableCell>
                        <HighlightedTableCell>Mã nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Tên người gửi</HighlightedTableCell>
                        <HighlightedTableCell>Email</HighlightedTableCell>
                        <HighlightedTableCell>Trạng thái</HighlightedTableCell>
                        <HighlightedTableCell>Hành động</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {documents.map((document) => (
                        <TableRow key={document.employeeId}>
                            <TableCell>{document.documentType}</TableCell>
                            <TableCell>{document.employeeId}</TableCell>
                            <TableCell>{document.senderName}</TableCell>
                            <TableCell>{document.email}</TableCell>
                            <TableCell>{document.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(document)}>Sửa</Button>
                                <Button onClick={() => handleDelete(document.employeeId)}>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DocumentTable;
