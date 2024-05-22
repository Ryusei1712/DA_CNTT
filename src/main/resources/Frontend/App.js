import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
import TotalEmployeesTab from 'E:/TN/my-react-app/src/TotalEmployeesTab'; // Import tab tổng nhân viên
import NewEmployeesTab from 'E:/TN/my-react-app/src/NewEmployeesTab';
import './styles.css';
import FactoryIcon from '@mui/icons-material/Factory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ResignedEmployeesTab from './ResignedEmployeesTab';
import LeaveByPolicyEmployeesTab from './LeaveByPolicyEmployeesTab';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CompanyLogo from 'E:/TN/my-react-app/src/logo.svg';
import LoginPage from './LoginPage'; // Import trang đăng nhập
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false); // State để kiểm tra trạng thái đăng nhập

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* Kiểm tra nếu đã đăng nhập, điều hướng đến trang chính */}
          {loggedIn ? <Redirect to="/main" /> : <LoginPage setLoggedIn={setLoggedIn} />}
        </Route>
        <Route path="/main">
          {/* Kiểm tra nếu chưa đăng nhập, điều hướng về trang đăng nhập */}
          {loggedIn ? <MiniDrawer /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const HighlightedTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const rows = [
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên mới' },
  { name: 'Nguyen Thanh Danh', code: 'NV002', email: 'thanhdanh@example.com', position: 'Manager', status: 'Nhân viên mới' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên cũ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên cũ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên cũ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên đã nghỉ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên cũ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên đã nghỉ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nghỉ theo chế độ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên cũ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên đã nghỉ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên cũ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên cũ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên đã nghỉ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên cũ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nghỉ theo chế độ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên cũ' },
  { name: 'Nguyen Thanh Danh', code: 'NV001', email: 'thanhdanh@example.com', position: 'Developer', status: 'Nhân viên cũ' },
  // Thêm các nhân viên khác tương tự ở đây
];

const countNewEmployees = (rows) => {
  return rows.filter(row => row.status === 'Nhân viên mới').length;
}

const countResignedEmployees = (rows) => {
  return rows.filter((row) => row.status === 'Nhân viên đã nghỉ').length;
};

const countLeaveByPolicyEmployees = (rows) => {
  return rows.filter((row) => row.status === 'Nghỉ theo chế độ').length;
};




export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [employeeInfo, setEmployeeInfo] = React.useState({
    name: '',
    code: '',
    email: '',
    position: '',
    status: '',
  });

  const [totalEmployees] = React.useState(rows.length); // State cho tổng nhân viên
  const [newEmployeesCount] = React.useState(countNewEmployees(rows)); // Đếm số lượng nhân viên mới
  const [resignedEmployeesCount] = React.useState(countResignedEmployees(rows)); // Đếm số lượng nhân viên đã nghỉ
  const [leaveByPolicyEmployeesCount] = React.useState(countLeaveByPolicyEmployees(rows)); // Đếm số lượng nhân viên nghỉ theo chế độ
  const [searchKeyword, setSearchKeyword] = React.useState(''); // State lưu từ khóa tìm kiếm
  const menuItems = [
    { title: 'Quản lý nhân sự', icon: <GroupIcon /> },
    { title: 'Kinh doanh', icon: <BusinessIcon /> },
    { title: 'Hành chính nhân sự', icon: <ManageAccountsIcon /> },
    { title: 'Kế toán', icon: <AccountBalanceWalletIcon /> },
    { title: 'Quản lý sản xuất', icon: <FactoryIcon /> },
    { title: 'Logistic', icon: <LocalShippingIcon /> },
  ];
  const [title, setTitle] = React.useState(menuItems[0].title); // Lấy tiêu đề mặc định từ mảng menuTitles
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);


  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAddEmployee = () => {
    setDialogOpen(true);
  };

  const handleSubMenuToggle = (menuItem) => {
    setTitle(menuItem.title); // Cập nhật tiêu đề khi click vào menu
    setSubMenuOpen(!subMenuOpen);
  };
  

  const handleDeleteEmployee = (name) => {
    // Xóa nhân viên từ danh sách
    setSnackbarMessage(`Đã xóa nhân viên ${name}`);
    setSnackbarOpen(true);
  };

  const handleEditEmployee = (name) => {
    // Thêm mã logic để chỉnh sửa thông tin nhân viên ở đây
    setSnackbarMessage(`Đã chỉnh sửa nhân viên ${name}`);
    setSnackbarOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setEmployeeInfo({
      name: '',
      code: '',
      email: '',
      position: '',
      status: '',
    });
  };

  const handleConfirmAddEmployee = () => {
    // Thêm mã logic để thêm nhân viên vào bảng ở đây
    setSnackbarMessage('Thêm nhân viên thành công');
    setSnackbarOpen(true);
    setDialogOpen(false);
    setEmployeeInfo({
      name: '',
      code: '',
      email: '',
      position: '',
      status: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
    // Đồng thời có thể thêm mã logic để lọc danh sách nhân viên theo từ khóa tìm kiếm ở đây
  };
  
 
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" noWrap component="div">
            {title} {/* Hiển thị tiêu đề */}
          </Typography>
            <Box sx={{ marginRight: '0px' }}>
              <Button variant="outlined" color="inherit">
                Đăng nhập
              </Button>
            </Box>
        </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <img src={CompanyLogo} alt="Company Logo" width="200" height="200" style={{ marginTop: '-125px' }} />
        <Divider sx={{ marginTop: '-65px' }} />

        
        <List>
            {menuItems.map((menuItem, index) => (
              <React.Fragment key={menuItem.title}>
              <ListItem key={menuItem.title} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => handleSubMenuToggle(menuItem)} // Chỉ gọi handleSubMenuToggle khi nhấn vào menu "Quản lý nhân sự"
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {menuItem.icon}
                    
                  </ListItemIcon>
                  <ListItemText primary={menuItem.title} sx={{ opacity: open ? 1 : 0 }} />
                  
                </ListItemButton>
                          {subMenuOpen && title === menuItem.title && (
                  <List sx={{ paddingLeft: 3 }}>
                    <ListItemButton >
                      {/* Thêm các mục con ở đây */}
                      <ListItemIcon>
                        <FiberManualRecordIcon sx = {
                          { fontSize: 15, color: 'black'}
                        } />
                      </ListItemIcon>
                      <ListItemText primary="Duyệt chứng từ" />
                    </ListItemButton>
                    <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon sx = {
                          { fontSize: 15, color: 'black'}
                        } />
                      </ListItemIcon>
                      <ListItemText primary="Bảng chấm công" />
                    </ListItemButton>
                    <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon sx = {
                          { fontSize: 15, color: 'black'}
                        } />
                      </ListItemIcon>
                      <ListItemText primary="Vi phạm" />
                    </ListItemButton>
                    <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon sx = {
                          { fontSize: 15, color: 'black'}
                        } />
                      </ListItemIcon>
                      <ListItemText primary="Đơn nghỉ phép" />
                    </ListItemButton>
                    
                  </List>
                )}
              </ListItem>
              </React.Fragment>
            ))}
        </List>

        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
          <Button variant="contained" onClick={handleAddEmployee}>Thêm nhân viên</Button>
          <TextField
            label="Tìm kiếm"
            variant="outlined"
            size="small"
            value={searchKeyword}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ marginLeft: 2 }}
          />
        </Box>

        
        {/* <Box sx={{ mt: 3, ml: '20px' }}>
          <Tabs value={0} aria-label="employee-tabs">
            <Tab label="Tổng nhân viên" />
          </Tabs>
        </Box>
        <Box sx={{ ml: '20px' }}>
          <Typography variant="subtitle1" gutterBottom>
            Tổng số nhân viên: {totalEmployees}
          </Typography>
        </Box> */}
     <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
        <div style={{ marginRight: '24px' }}>
          <TotalEmployeesTab totalEmployees={totalEmployees} />
        </div>
        <div style={{ marginLeft: '24px' }}>
          <NewEmployeesTab newEmployeesCount={newEmployeesCount} />
        </div>
        <div style={{ marginLeft: '24px' }}>
          <ResignedEmployeesTab resignedEmployeesCount={resignedEmployeesCount} />
        </div>
        <div style={{ marginLeft: '24px' }}>
          <LeaveByPolicyEmployeesTab leaveByPolicyEmployeesCount={leaveByPolicyEmployeesCount} />
        </div>
     </Box>


        <Box sx={{ overflow: 'auto', marginTop: '24px' }}>
    <div className="table-container">
      <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 200px)' }}>
        <Table sx={{ minWidth: 650, overflow: 'auto' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <HighlightedTableCell align="left">Tên nhân viên</HighlightedTableCell>
              <HighlightedTableCell align="left">Mã nhân viên</HighlightedTableCell>
              <HighlightedTableCell align="left">Email</HighlightedTableCell>
              <HighlightedTableCell align="left">Vị trí</HighlightedTableCell>
              <HighlightedTableCell align="left">Trạng thái</HighlightedTableCell>
              <HighlightedTableCell align="left">Thao tác</HighlightedTableCell> {/* Thêm cột thao tác */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.code}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.position}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left"> {/* Thêm cột thao tác */}
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleEditEmployee(row.name)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDeleteEmployee(row.name)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
    
  
</Box>
      </Box>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
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
          <Button onClick={handleDialogClose}>Hủy</Button>
          <Button onClick={handleConfirmAddEmployee}>Xác nhận</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      
    </Box>
  );
}
