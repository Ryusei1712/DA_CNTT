import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CompanyLogo from './logo.svg'; // Thay đổi đường dẫn tới hình ảnh của bạn

function SignInSide() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    navigate('/app');
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/background.jpg)', // Đường dẫn tới ảnh trong thư mục public
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.5s ease-in-out', // Hiệu ứng transition
          }}
        />
        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={5} 
          component={Paper} 
          elevation={6} 
          square 
          sx={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '24px',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={CompanyLogo} alt="Company Logo" width="300" height="300" style={{ marginBottom: '24px' }} />
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
              Đăng nhập
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Vui lòng nhập Email"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Vui lòng nhập mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Ghi nhớ thông tin"
                sx={{ marginTop: '8px' }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 3, 
                  mb: 2,
                  padding: '12px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  backgroundColor: '#1976d2',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#1565c0',
                  },
                  '&:focus': {
                    backgroundColor: '#0d47a1',
                  }
                }}
              >
                Đăng nhập
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: '#1976d2', textDecoration: 'none' }}>
                    Quên mật khẩu?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" sx={{ color: '#1976d2', textDecoration: 'none' }}>
                    {"Bạn chưa có tài khoản? Đăng ký ngay"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;
