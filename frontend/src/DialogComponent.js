import React from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from '@mui/material';

export default function DialogComponent({
    dialogOpen,
    handleDialogClose,
    dialogType,
    employeeInfo,
    documentInfo,
    leaveRequestInfo,
    violationInfo,
    timesheetInfo,
    QualityControlInfo,
    PackagingInfo,
    DepreciationInfo,
    WorkOrderInfo,
    handleInputChange,
    handleConfirmAdd,
    snackbarOpen,
    handleCloseSnackbar,
    snackbarMessage,
    editMode
}) {
    return (
        <>
            <Dialog open={dialogOpen} onClose={handleDialogClose}>
                <DialogTitle>{`Thêm ${dialogType === 'employee' ? 'nhân viên' : dialogType === 'document' ? 'chứng từ' : dialogType === 'leaveRequest' ? 'đơn nghỉ' : dialogType === 'violation' ? 'vi phạm' : 'chấm công'} mới`}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`Nhập thông tin ${dialogType === 'employee' ? 'nhân viên' : dialogType === 'document' ? 'chứng từ' : dialogType === 'leaveRequest' ? 'đơn nghỉ' : dialogType === 'violation' ? 'vi phạm' : 'chấm công'} mới:`}
                    </DialogContentText>
                    {dialogType === 'employee' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="employeeName"
                                name="employeeName"
                                label="Tên nhân viên"
                                type="text"
                                fullWidth
                                value={employeeInfo.employeeName}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="employeeCode"
                                name="employeeCode"
                                label="Mã nhân viên"
                                type="text"
                                fullWidth
                                value={employeeInfo.employeeCode}
                                onChange={handleInputChange}
                                disabled={editMode}
                            />
                            <TextField
                                margin="dense"
                                id="email"
                                name="email"
                                label="Email"
                                type="email"
                                fullWidth
                                value={employeeInfo.email}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="position"
                                name="position"
                                label="Vị trí"
                                type="text"
                                fullWidth
                                value={employeeInfo.position}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="status"
                                name="status"
                                label="Trạng thái"
                                type="text"
                                fullWidth
                                value={employeeInfo.status}
                                onChange={handleInputChange}
                            />
                        </>
                    )}
                    {dialogType === 'document' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="documentType"
                                name="documentType"
                                label="Loại chứng từ"
                                type="text"
                                fullWidth
                                value={documentInfo.documentType}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="employeeId"
                                name="employeeId"
                                label="Mã nhân viên"
                                type="text"
                                fullWidth
                                value={documentInfo.employeeCode}
                                onChange={handleInputChange}
                                disabled={editMode}
                            />
                            <TextField
                                margin="dense"
                                id="senderName"
                                name="senderName"
                                label="Tên người gửi"
                                type="text"
                                fullWidth
                                value={documentInfo.senderName}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="email"
                                name="email"
                                label="Email"
                                type="email"
                                fullWidth
                                value={documentInfo.email}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="status"
                                name="status"
                                label="Trạng thái"
                                type="text"
                                fullWidth
                                value={documentInfo.status}
                                onChange={handleInputChange}
                            />
                        </>
                    )}
                    {dialogType === 'leaveRequest' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="employeeCode"
                                name="employeeCode"
                                label="Mã nhân viên"
                                type="text"
                                fullWidth
                                value={leaveRequestInfo.employeeCode}
                                onChange={handleInputChange}
                                disabled={editMode}
                            />
                            <TextField
                                margin="dense"
                                id="employeeName"
                                name="employeeName"
                                label="Tên nhân viên"
                                type="text"
                                fullWidth
                                value={leaveRequestInfo.employeeName}
                                onChange={handleInputChange}
                                disabled={editMode}
                            />
                            <TextField
                                margin="dense"
                                id="email"
                                name="email"
                                label="Email"
                                type="email"
                                fullWidth
                                value={leaveRequestInfo.email}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="position"
                                name="position"
                                label="Chức vụ"
                                type="text"
                                fullWidth
                                value={leaveRequestInfo.position}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="reason"
                                name="reason"
                                label="Lý do"
                                type="text"
                                fullWidth
                                value={leaveRequestInfo.reason}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="requestType"
                                name="requestType"
                                label="Loại yêu cầu"
                                type="text"
                                fullWidth
                                value={leaveRequestInfo.requestType}
                                onChange={handleInputChange}
                            />
                        </>
                    )}
                    {dialogType === 'violation' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="employeeCode"
                                name="employeeCode"
                                label="Mã nhân viên"
                                type="text"
                                fullWidth
                                value={violationInfo.employeeCode}
                                onChange={handleInputChange}
                                disabled={editMode}
                            />
                            <TextField
                                margin="dense"
                                id="employeeName"
                                name="employeeName"
                                label="Tên nhân viên"
                                type="text"
                                fullWidth
                                value={violationInfo.employeeName}
                                onChange={handleInputChange}
                                disabled={editMode}
                            />
                            <TextField
                                margin="dense"
                                id="violationType"
                                name="violationType"
                                label="Loại vi phạm"
                                type="text"
                                fullWidth
                                value={violationInfo.violationType}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="severity"
                                name="severity"
                                label="Mức độ nghiêm trọng"
                                type="number"
                                fullWidth
                                value={violationInfo.severity}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="status"
                                name="status"
                                label="Trạng thái"
                                type="text"
                                fullWidth
                                value={violationInfo.status}
                                onChange={handleInputChange}
                            />
                        </>
                    )}
                
                    {dialogType === 'timesheet' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="employeeCode"
                                name="employeeCode"
                                label="Mã nhân viên"
                                type="text"
                                fullWidth
                                value={timesheetInfo.employeeCode}
                                onChange={handleInputChange}
                                disabled={editMode}
                            />
                            <TextField
                                margin="dense"
                                id="date"
                                name="date"
                                label="Ngày"
                                type="date"
                                fullWidth
                                value={timesheetInfo.date}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="hoursWorked"
                                name="hoursWorked"
                                label="Giờ làm việc"
                                type="number"
                                fullWidth
                                value={timesheetInfo.hoursWorked}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="status"
                                name="status"
                                label="Trạng thái"
                                type="text"
                                fullWidth
                                value={timesheetInfo.status}
                                onChange={handleInputChange}
                            />
                        </>
                    )}
            
                    {dialogType === 'qualityControl' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="inspector"
                                name="inspector"
                                label="Người kiểm tra"
                                type="text"
                                fullWidth
                                value={QualityControlInfo.inspector}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="productRun"
                                name="productRun"
                                label="Tên dây chuyền"
                                type="text"
                                fullWidth
                                value={QualityControlInfo.productRun}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="qualityResult"
                                name="qualityResult"
                                label="Kết quả chất lượng"
                                type="text"
                                fullWidth
                                value={QualityControlInfo.qualityResult}
                                onChange={handleInputChange}
                            />
                        
                        </>
                    )}
                    {dialogType === 'packaging' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="packagingDate"
                                name="packingDate"
                                label="Ngày sản xuất"
                                type="date"
                                fullWidth
                                value={PackagingInfo.packagingDate}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="productID"
                                name="productID"
                                label="Mã sản phẩm"
                                type="number"
                                fullWidth
                                value={PackagingInfo.productID}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="productRun"
                                name="productRun"
                                label="Tên dây chuyền"
                                type="text"
                                fullWidth
                                value={PackagingInfo.productRun}
                                onChange={handleInputChange}
                            />
                        
                        </>
                    )}
                    {dialogType === 'depreciation' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="productRun"
                                name="productRune"
                                label="Tên dây chuyền"
                                type="text"
                                fullWidth
                                value={DepreciationInfo.productRun}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="numberOfCancellations"
                                name="numberOfCancellations"
                                label="Số lần bị hủy"
                                type="number"
                                fullWidth
                                value={DepreciationInfo.numberOfCancellations}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="status"
                                name="status"
                                label="Thao tác"
                
                                fullWidth
                                value={DepreciationInfo.status}
                                onChange={handleInputChange}
                            />
                        
                        </>
                    )}
                    {dialogType === 'workOrder' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="workOrderDate"
                                name="workOrderDate"
                                label="Ngày sản xuất"
                                type="date"
                                fullWidth
                                value={WorkOrderInfo.WorkOrderDate}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="sequence"
                                name="sequence"
                                label="Tên công đoạn"
                                type="text"
                                fullWidth
                                value={WorkOrderInfo.sequence}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="status"
                                name="status"
                                label="Thao tác"
                
                                fullWidth
                                value={WorkOrderInfo.status}
                                onChange={handleInputChange}
                            />
                        
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Hủy</Button>
                    <Button onClick={handleConfirmAdd}>Xác nhận</Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
}
