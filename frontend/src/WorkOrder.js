import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

// Nhóm work orders theo production line
function groupWorkOrdersByProductionLine(workOrders) {
    return workOrders.reduce((acc, workOrder) => {
        const { productionLine } = workOrder;
        if (!acc[productionLine]) {
            acc[productionLine] = [];
        }
        acc[productionLine].push(workOrder);
        return acc;
    }, {});
}

function WorkOrder({ workOrders }) {
    const groupedWorkOrders = groupWorkOrdersByProductionLine(workOrders);

    return (
        <>
            {Object.keys(groupedWorkOrders).map((productionLine) => (
                <TableContainer component={Paper} key={productionLine}>
                    <Table>
                        <TableHead>{productionLine}
                            <TableRow>
                                <HighlightedTableCell>Ngày sản xuất</HighlightedTableCell>
                                <HighlightedTableCell>Tên công đoạn</HighlightedTableCell>
                                <HighlightedTableCell>Tình trạng</HighlightedTableCell>
                                <HighlightedTableCell>Thao tác</HighlightedTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {groupedWorkOrders[productionLine].map((workOrder) => (
                                <TableRow key={workOrder.id}> {/* Đảm bảo workOrder.id tồn tại */}
                                    <TableCell>{workOrder.workOrderDate}</TableCell>
                                    <TableCell>{workOrder.sequence}</TableCell>
                                    <TableCell>{workOrder.status}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" sx={{ marginLeft: 2, marginBottom: 2 }}>Duyệt</Button>
                                        <Button variant="contained" sx={{ marginLeft: 2, marginBottom: 2 }}>Không duyệt</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ))}
        </>
    );
}

export default WorkOrder;
