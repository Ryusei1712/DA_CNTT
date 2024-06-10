import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Bangchamcong({ open3, handleClose3, employeeInfo3 }) {
  const [gioVaoLam, setGioVaoLam] = useState('');
  const [gioRaVe, setGioRaVe] = useState('');
  const [tongGioLam, setTongGioLam] = useState('');

  // Function to handle change in gioVaoLam or gioRaVe
  const handleTimeChange = () => {
    // Split gioVaoLam and gioRaVe to get hours and minutes
    const [gioVaoLamHour, gioVaoLamMinute] = gioVaoLam.split(':').map(Number);
    const [gioRaVeHour, gioRaVeMinute] = gioRaVe.split(':').map(Number);

    // Define gioNghiTrua
    const gioNghiTrua = 12; // Assumed lunch break at 12:00 PM

    // Calculate total minutes before lunch break
    let totalMinutes = (gioNghiTrua - gioVaoLamHour) * 60 - gioVaoLamMinute;
    // Convert negative minutes to positive (for time crossing midnight)
    if (totalMinutes < 0) {
      totalMinutes += 24 * 60;
    }

    // Calculate total minutes after lunch break
    totalMinutes += (gioRaVeHour - (gioNghiTrua + 1)) * 60 + gioRaVeMinute;

    // Convert total minutes to HH:MM format
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Update state with total hours
    setTongGioLam(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
  };

  return (
    <Dialog open={open3} onClose={handleClose3}>
      <DialogTitle>Lập đơn nghỉ</DialogTitle>
      <DialogContent>
        <DialogContentText>Nhập thông tin cần thiết:</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Mã nhân viên"
          type="text"
          fullWidth
          value={employeeInfo3.name}
        />
        <TextField
          margin="dense"
          id="code"
          name="code"
          label="Tên nhân viên"
          type="text"
          fullWidth
          value={employeeInfo3.code}
        />
        <TextField
          margin="dense"
          id="gioVaoLam"
          name="gioVaoLam"
          label="Giờ vào làm (HH:MM)"
          type="text"
          fullWidth
          value={gioVaoLam}
          onChange={(e) => setGioVaoLam(e.target.value)}
          onBlur={handleTimeChange}
        />
        <TextField
          margin="dense"
          id="gioRaVe"
          name="gioRaVe"
          label="Giờ ra về (HH:MM)"
          type="text"
          fullWidth
          value={gioRaVe}
          onChange={(e) => setGioRaVe(e.target.value)}
          onBlur={handleTimeChange}
        />
        <TextField
          margin="dense"
          id="tongGioLam"
          name="tongGioLam"
          label="Tổng giờ làm"
          type="text"
          fullWidth
          value={tongGioLam}
          InputProps={{
            readOnly: true,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={handleClose3}>
            Thay đổi
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default Bangchamcong;
