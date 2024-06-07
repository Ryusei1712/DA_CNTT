import React, { useState, useEffect } from 'react';
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
// import Snackbar from '@mui/material/Snackbar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

import TotalEmployeesTab from './component/tab/TotalEmployeesTab'; // Import tab tổng nhân viên
import NewEmployeesTab from './component/tab/NewEmployeesTab';
import './styles.css';
import FactoryIcon from '@mui/icons-material/Factory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ResignedEmployeesTab from './component/tab/ResignedEmployeesTab';
import LeaveByPolicyEmployeesTab from './component/tab/LeaveByPolicyEmployeesTab';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CompanyLogo from './logo.svg';
import AddEmployee from './component/AddEmployee';
import Duyetchungtu from './Duyetchungtu';


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
export default function MiniDrawer() {
  const [employees, setEmployees] = useState([]); // State để lưu trữ dữ liệu nhân viên từ API

  useEffect(() => {
    // Gọi API để lấy dữ liệu nhân viên khi component được render
    fetch('api/employees')
        .then(response => response.json())
        .then(data => setEmployees(data))
        .catch(error => console.error('Error fetching data:', error));
  }, []);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [setSnackbarOpen] = React.useState(false);
  const [setSnackbarMessage] = React.useState('');
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [employeeInfo, setEmployeeInfo] = React.useState({
    employeeName: '',
    employeeCode: '',
    email: '',
    position: '',
    status: '',
  });
  const [totalEmployees, setTotalEmployees] = React.useState(0);
  const [newEmployeesCount, setNewEmployeesCount] = React.useState(0);
  const [resignedEmployeesCount, setResignedEmployeesCount] = React.useState(0);
  const [leaveByPolicyEmployeesCount, setLeaveByPolicyEmployeesCount] = React.useState(0);
  React.useEffect(() => {
    // Gọi API để lấy tổng số nhân viên
    fetch('/api/employees')
        .then(response => response.json())
        .then(data => setTotalEmployees(data))
        .catch(error => console.error('Error fetching total employees:', error));

    // Gọi API để lấy số lượng nhân viên mới
    fetch('/api/employees/countNewEmployees')
        .then(response => response.json())
        .then(data => setNewEmployeesCount(data))
        .catch(error => console.error('Error fetching new employees count:', error));

    // Gọi API để lấy số lượng nhân viên đã nghỉ
    fetch('/api/employees/countFiredEmployees')
        .then(response => response.json())
        .then(data => setResignedEmployeesCount(data))
        .catch(error => console.error('Error fetching resigned employees count:', error));

    // Gọi API để lấy số lượng nhân viên nghỉ theo chế độ
    fetch('/api/employees/countLeaveByPolicyEmployees')
        .then(response => response.json())
        .then(data => setLeaveByPolicyEmployeesCount(data))
        .catch(error => console.error('Error fetching leave by policy employees count:', error));
  }, []);
  const [searchKeyword, setSearchKeyword] = React.useState(''); // State lưu từ khóa tìm kiếm
  const menuItems = [
    { title: 'Quản lý nhân sự', icon: <GroupIcon /> },
    { title: 'Kinh doanh', icon: <BusinessIcon /> },
    { title: 'Hành chính nhân sự', icon: <ManageAccountsIcon /> },
    { title: 'Kế toán', icon: <AccountBalanceWalletIcon /> },
    { title: 'Quản lý sản xuất', icon: <FactoryIcon /> },
    { title: 'Logistic', icon: <LocalShippingIcon /> },
  ];
  const subMenuItems = [
    { title: 'Duyệt chứng từ'},
    { title: 'Bảng chấm công'},
    { title: 'Vi phạm'},
    { title: 'Đơn nghỉ phép'},
  ];
  const [title, setTitle] = React.useState(menuItems[0].title); // Lấy tiêu đề mặc định từ mảng menuTitles
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);

  const [showDuyetChungTuTable, setShowDuyetChungTuTable] = useState(false); // State để kiểm soát việc hiển thị bảng Duyệt chứng từ
  const handleDuyetChungTuClick = () => {
    // Cập nhật state để hiển thị bảng Duyệt chứng từ
    setShowDuyetChungTuTable(true);
  };
  const handleSubMenuClick = (subMenuItem) => {
    // Xử lý khi người dùng nhấp vào một submenu cụ thể
    console.log(`Bạn đã chọn submenu: ${subMenuItem.title}`);
  };
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
    if (menuItem.title === "Quản lý nhân sự") {
      setTitle(menuItem.title); // Cập nhật tiêu đề khi click vào menu
      setSubMenuOpen(!subMenuOpen); // Mở hoặc đóng submenu
    }
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
      employeeName: '',
      employeeCode: '',
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
      employeeName: '',
      employeeCode: '',
      email: '',
      position: '',
      status: '',
    });
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
                      {subMenuItems.map((subMenuItem, subIndex) => (
                        <ListItem key={subMenuItem.title} disablePadding>
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: 'initial',
                              px: 3.5,
                            }}
                            onClick={() => handleSubMenuClick(subMenuItem)} // Xử lý khi nhấn vào một submenu
                          >
                            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                              {subMenuItem.icon}
                            </ListItemIcon>
                            <ListItemText primary={subMenuItem.title} />
                          </ListItemButton>
                        </ListItem>
                      ))}
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
            {employees.map((row) => (
              <TableRow
                key={row.employeeName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" component="th" scope="row">
                  {row.employeeName}
                </TableCell>
                <TableCell align="left">{row.employeeCode}</TableCell>
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
    <AddEmployee
      open={dialogOpen}
      handleClose={handleDialogClose}
      handleConfirmAddEmployee={handleConfirmAddEmployee}
      employeeInfo={employeeInfo}
      handleInputChange={handleInputChange}
    />
    {showDuyetChungTuTable && <Duyetchungtu />}
</Box>
  </Box>
    </Box>
  );
}