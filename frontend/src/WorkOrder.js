import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HighlightedTableCell from './HighlightedTableCell';

// Nhóm work orders theo production line
function groupWorkOrdersByProductionLine(workOrders = []) {
    return workOrders.reduce((acc, workOrder) => {
        const { productionLine } = workOrder;
        if (!acc[productionLine]) {
            acc[productionLine] = [];
        }
        acc[productionLine].push(workOrder);
        return acc;
    }, {});
}

function WorkOrder({ workOrders, handleDialogOpen }) {
    const groupedWorkOrders = groupWorkOrdersByProductionLine(workOrders);

    const evaluateProductionLine = (productionLine) => {
        const workOrdersInLine = groupedWorkOrders[productionLine];
        const hasNotGoodStatus = workOrdersInLine.some(workOrder => workOrder.status === 'Không tốt');
        const qualityResult = hasNotGoodStatus ? 'Không tốt' : 'Tốt';

        handleDialogOpen('qualityControl', { productionLine, qualityResult });
    };


    return (
        <>
            {Object.keys(groupedWorkOrders).map((productionLine) => (
                <TableContainer component={Paper} key={productionLine}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={3} sx={{ paddingBottom: 2 }}>
                                    {productionLine}
                                    <Button
                                        onClick={() => {
                                            console.log('handleDialogOpen exists:', typeof handleDialogOpen === 'function');
                                            evaluateProductionLine(productionLine);
                                        }}
                                        variant="contained"
                                        sx={{ marginLeft: 2 }}
                                    >
                                        Duyệt dây chuyền
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <HighlightedTableCell>Ngày sản xuất</HighlightedTableCell>
                                <HighlightedTableCell>Tên công đoạn</HighlightedTableCell>
                                <HighlightedTableCell>Tình trạng</HighlightedTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {groupedWorkOrders[productionLine].map((workOrder) => (
                                <TableRow key={workOrder.id}>
                                    <TableCell>{workOrder.workOrderDate}</TableCell>
                                    <TableCell>{workOrder.sequence}</TableCell>
                                    <TableCell>{workOrder.status}</TableCell>
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
