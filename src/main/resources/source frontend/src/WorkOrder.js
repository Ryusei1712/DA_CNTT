import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

function WorkOrder({ workOrders}) {
    return (
        <>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableHead >Dây chuyền 1</TableHead>
                    <TableRow>
                        <HighlightedTableCell>Ngày sản xuất</HighlightedTableCell>
                        <HighlightedTableCell>Tên công đoạn</HighlightedTableCell>
                        <HighlightedTableCell>Tình trạng</HighlightedTableCell>
                    </TableRow>
                    
                </TableHead>
                <Button variant="contained" sx={{ marginLeft: 2, marginBottom: 2 }}>Duyệt</Button>
                <Button variant="contained" sx={{ marginLeft: 2, marginBottom: 2 }}>Không duyệt</Button>
                <TableBody>
                    {/* Buoc 2 */}
                    {workOrders.map((workOrder) => (
                        <TableRow key={workOrder.workOrderDate}>
                            <TableCell>{workOrder.sequence}</TableCell>
                            <TableCell>{workOrder.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <TableContainer component={Paper}>
            <Table>
                    <TableHead>
                    <TableHead >Dây chuyền 2</TableHead>
                        <TableRow>
                            <HighlightedTableCell>Ngày sản xuất</HighlightedTableCell>
                            <HighlightedTableCell>Tên công đoạn</HighlightedTableCell>
                            <HighlightedTableCell>Tình trạng</HighlightedTableCell>
                        </TableRow>
                        
                    </TableHead>
                    <Button variant="contained" sx={{ marginLeft: 2, marginBottom: 2 }}>Duyệt</Button>
                    <Button variant="contained" sx={{ marginLeft: 2, marginBottom: 2 }}>Không duyệt</Button>
                    <TableBody>
                        {/* Buoc 2 */}
                        {workOrders.map((workOrder) => (
                            <TableRow key={workOrder.workOrderDate}>
                                <TableCell>{workOrder.sequence}</TableCell>
                                <TableCell>{workOrder.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
        </TableContainer>
        <TableContainer>
            <Table>
                        <TableHead>
                        <TableHead >Dây chuyền 3</TableHead>
                            <TableRow>
                                <HighlightedTableCell>Ngày sản xuất</HighlightedTableCell>
                                <HighlightedTableCell>Tên công đoạn</HighlightedTableCell>
                                <HighlightedTableCell>Tình trạng</HighlightedTableCell>
                            </TableRow>
                            
                        </TableHead>
                        <Button variant="contained" sx={{ marginLeft: 2, marginBottom: 2 }}>Duyệt</Button>
                        <Button variant="contained" sx={{ marginLeft: 2, marginBottom: 2 }}>Không duyệt</Button>
                        <TableBody>
                            {/* Buoc 2 */}
                            {workOrders.map((workOrder) => (
                                <TableRow key={workOrder.workOrderDate}>
                                    <TableCell>{workOrder.sequence}</TableCell>
                                    <TableCell>{workOrder.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
        </TableContainer>
        </>
        
    );
}

export default WorkOrder;
