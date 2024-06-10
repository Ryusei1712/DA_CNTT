import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

function Absence({ open1, handleClose1, employeeInfo1 }) {
  const [donType, setDonType] = useState('');

  return (
    <Dialog open={open1} onClose={handleClose1}>
      <DialogTitle>Lập đơn nghỉ</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Nhập thông tin cần thiết:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Mã nhân viên"
          type="text"
          fullWidth
          value={employeeInfo1.name}
        />
        <TextField
          margin="dense"
          id="code"
          name="code"
          label="Tên nhân viên"
          type="text"
          fullWidth
          value={employeeInfo1.code}
        />
        <TextField
          margin="dense"
          id="email"
          name="email"
          label="Email"
          type="email"
          fullWidth
          value={employeeInfo1.email}
        />
        <TextField
          margin="dense"
          id="position"
          name="position"
          label="Chức vụ"
          type="text"
          fullWidth
          value={employeeInfo1.position}
        />
        <TextField
          margin="dense"
          id="status"
          name="status"
          label="Lí do"
          type="text"
          fullWidth
          value={employeeInfo1.status}
        />
        <InputLabel id="donType-label">Loại đơn</InputLabel>
        <Select
          labelId="donType-label"
          id="donType"
          value={donType}
          onChange={(e) => setDonType(e.target.value)}
          fullWidth
        >
          <MenuItem value="Đơn nghỉ phép">Đơn nghỉ phép</MenuItem>
          <MenuItem value="Đơn nghỉ hưu">Đơn nghỉ hưu</MenuItem>
          <MenuItem value="Đơn nghỉ chế độ">Đơn nghỉ chế độ</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={handleClose1}>Xác nhận</Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default Absence;
