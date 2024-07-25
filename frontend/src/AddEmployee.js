import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddEmployee({ open, handleClose, handleConfirmAddEmployee, employeeInfo, handleInputChange }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Thêm nhân viên mới</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Nhập thông tin nhân viên mới:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Tên nhân viên"
          type="text"
          fullWidth
          value={employeeInfo.name}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          id="code"
          name="code"
          label="Mã nhân viên"
          type="text"
          fullWidth
          value={employeeInfo.code}
          onChange={handleInputChange}
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button onClick={handleConfirmAddEmployee}>Xác nhận</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddEmployee;
