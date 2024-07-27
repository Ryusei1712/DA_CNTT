import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Avatar, IconButton, Link, Rating } from '@mui/material';
import { styled } from '@mui/system';
import CompanyLogo from './logo.svg'; // Đường dẫn tới logo của bạn
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const StyledButton = styled(Button)({
  backgroundColor: '#f50057',
  color: 'white',
  '&:hover': {
    backgroundColor: '#ff4081',
  },
  marginLeft: '1350px', // Khoảng cách 50px giữa các nút
});

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#9BD3FC', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={CompanyLogo} alt="Company Logo" sx={{ width: 60, height: 60, mr: 2 }} />
              <Box>
                <Typography variant="subtitle1">Công ty FUDA</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Số điện thoại:</strong> 0123 456 789<br />
                  <strong>Email:</strong> contact@fuda.com<br />
                  <strong>Địa chỉ:</strong> Số 1, Đường ABC, Thành phố XYZ
                </Typography>
                <IconButton color="primary" aria-label="location" sx={{ mt: 1 }}>
                  <LocationOnIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Box>
              <Typography variant="body1" sx={{ mt: 1 }}>
                <Link href="#">Chính sách bảo mật</Link><br />
                <Link href="#">Điều khoản sử dụng</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const ReviewCard = styled(Box)({
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
  });
const Homepage = () => {
  const navigate = useNavigate();

  const handleNavigate = (section) => {
    console.log(`Navigate to ${section}`);
  };

  const handleLoginClick = () => {
    navigate('/signin');
  };

  return (
    <Box>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            <img src={CompanyLogo} alt="Company Logo" style={{ width: 60, height: 60 }} />
          </Typography>
          <Button color="inherit" onClick={() => handleNavigate('Giới thiệu')}>Giới thiệu</Button>
          <Button color="inherit" onClick={() => handleNavigate('Đánh giá')}>Đánh giá</Button>
          <Button color="inherit" onClick={() => handleNavigate('Liên hệ')}>Liên hệ</Button>
          <StyledButton variant="contained" onClick={handleLoginClick}>Quản lý</StyledButton>
        </Toolbar>
      </AppBar>

      {/* Grid với hình nền */}
      <Grid
        container
        sx={{
          height: '400px', // Điều chỉnh chiều cao của Grid tại đây
          backgroundImage: 'url(/background.jpg)', // Đường dẫn tới ảnh trong thư mục public
          backgroundRepeat: 'no-repeat',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out', // Hiệu ứng transition
        }}
      />

      {/* Phần Body */}
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>Giới thiệu</Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Công ty FUDA, với hơn 30 năm kinh nghiệm, là một trong những nhà sản xuất hàng đầu trong lĩnh vực sản xuất bột ăn cho cá. Chúng tôi cam kết cung cấp những sản phẩm chất lượng cao, đáp ứng được các tiêu chuẩn nghiêm ngặt của ngành công nghiệp thủy sản.
            Với mục tiêu mang đến sự phát triển bền vững cho ngành nuôi trồng thủy sản, chúng tôi không ngừng nâng cao công nghệ sản xuất và quản lý chất lượng, đảm bảo mỗi lô sản phẩm đều đạt độ chuẩn mực cao nhất. Đội ngũ nhân viên tại FUDA luôn nỗ lực không ngừng để đáp ứng mọi yêu cầu của khách hàng, từ việc cung cấp sản phẩm chất lượng đến dịch vụ hỗ trợ sau bán hàng tận tình và chuyên nghiệp.
            Chúng tôi xây dựng và duy trì mối quan hệ đối tác chặt chẽ với các nhà khoa học, chuyên gia dinh dưỡng và các nhà nghiên cứu trong lĩnh vực thủy sản để đảm bảo rằng các sản phẩm của chúng tôi không chỉ cung cấp dinh dưỡng tối ưu cho cá nhưng còn giúp nâng cao hiệu quả sản xuất và giảm thiểu tác động đến môi trường.
            Với tầm nhìn sáng tạo và cam kết vững mạnh, FUDA không ngừng đầu tư vào nghiên cứu và phát triển sản phẩm mới để đáp ứng nhu cầu đa dạng của thị trường. Chúng tôi tin rằng việc mang đến những giải pháp tiên tiến và hiệu quả sẽ giúp nâng cao năng suất nuôi trồng thủy sản và mang lại lợi ích bền vững cho các đối tác và khách hàng của chúng tôi.
            FUDA không chỉ là một nhà sản xuất, mà là một đối tác tin cậy, luôn hướng tới sự phát triển bền vững và cùng nhau xây dựng một ngành công nghiệp thủy sản ngày càng phát triển và hiệu quả hơn.
          </Typography>
          {/* Phần Đánh giá */}
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>Đánh giá từ khách hàng</Typography>
          {/* Card đánh giá 1 */}
          <ReviewCard>
            <Avatar src="/avatar1.jpg" alt="Avatar" sx={{ marginRight: '16px' }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Nguyễn Thành Danh</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                "Đã sử dụng sản phẩm của FUDA và rất hài lòng với chất lượng."
              </Typography>
              <Rating name="review-rating-1" value={5} readOnly />
            </Box>
          </ReviewCard>

          {/* Card đánh giá 2 */}
          <ReviewCard>
            <Avatar src="/avatar2.jpg" alt="Avatar" sx={{ marginRight: '16px' }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Vũ Đình Phúc</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                "Sản phẩm rất tốt, giúp tăng sản lượng và giảm thiểu bệnh tật cho cá."
              </Typography>
              <Rating name="review-rating-2" value={3} readOnly precision={0.5} />
            </Box>
          </ReviewCard>
        </Box>
      </Container>

         
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Homepage;
