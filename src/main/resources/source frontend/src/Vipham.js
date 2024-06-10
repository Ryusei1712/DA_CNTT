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

function Vipham({ open2, handleClose2, employeeInfo2 }) {
  const [donType, setDonType] = useState('');
  const [mucDo, setMucDo] = useState('');
  const [tinhTrang, setTinhTrang] = useState('');

  // Function to handle change in violation type
  const handleDonTypeChange = (e) => {
    const selectedType = e.target.value;
    setDonType(selectedType);
    // Auto-fill mucDo and tinhTrang based on violation type
    switch (selectedType) {
      case 'Đi trễ':
        setMucDo('1');
        setTinhTrang('Nhắc nhở');
        break;
      case 'Nghỉ không phép':
        setMucDo('2');
        setTinhTrang('Cảnh cáo');
        break;
      case 'Trộm cắp':
      case 'Phá hoại tài sản':
      case 'Gây rối':
        setMucDo('3');
        setTinhTrang('Sa thải');
        break;
      default:
        setMucDo('');
        setTinhTrang('');
    }
  };

  return (
    <Dialog open={open2} onClose={handleClose2}>
      <DialogTitle>Xét vi phạm của nhân viên</DialogTitle>
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
          value={employeeInfo2.name}
        />
        <TextField
          margin="dense"
          id="code"
          name="code"
          label="Tên nhân viên"
          type="text"
          fullWidth
          value={employeeInfo2.code}
        />
        <InputLabel id="donType-label">Loại vi phạm</InputLabel>
        <Select
          labelId="donType-label"
          id="donType"
          value={donType}
          onChange={handleDonTypeChange}
          fullWidth
        >
          <MenuItem value="Đi trễ">Đi trễ</MenuItem>
          <MenuItem value="Nghỉ không phép">Nghỉ không phép</MenuItem>
          <MenuItem value="Trộm cắp">Trộm cắp</MenuItem>
          <MenuItem value="Phá hoại tài sản">Phá hoại tài sản</MenuItem>
          <MenuItem value="Gây rối">Gây rối</MenuItem>
        </Select>
        <TextField
          margin="dense"
          id="position"
          name="position"
          label="Mức độ"
          type="text"
          fullWidth
          value={mucDo}
          readOnly
        />
        <TextField
          margin="dense"
          id="status"
          name="status"
          label="Tình trạng"
          type="text"
          fullWidth
          value={tinhTrang}
          readOnly
        />
      </DialogContent>
      <DialogActions>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={handleClose2}>Xác nhận</Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default Vipham;
