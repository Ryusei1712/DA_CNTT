import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Thêm logic xác thực tài khoản ở đây
    if (email === 'admin@example.com' && password === 'password') {
      onLogin(true); // Nếu đăng nhập thành công, gọi hàm onLogin với giá trị true
    } else {
      alert('Thông tin đăng nhập không đúng');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Đăng nhập
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Mật khẩu"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleLogin}>
        Đăng nhập
      </Button>
    </Box>
  );
};

export default Login;
