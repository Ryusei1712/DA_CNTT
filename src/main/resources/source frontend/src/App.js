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
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CompanyLogo from './logo.svg';
import Snackbar from '@mui/material/Snackbar';
import TotalEmployeesTab from './component/tab/TotalEmployeesTab.js';
import NewEmployeesTab from './component/tab/NewEmployeesTab.js';
import LeaveByPolicyEmployeesTab from './component/tab/LeaveByPolicyEmployeesTab.js';
import DApproved from './component/tab/DAprroved.js';
import Aprroved from './component/tab/Aprroved.js';
import AddEmployee from './AddEmployee.js';
import Absence from './Absence.js'
import Vipham from './Vipham.js';
import Bangchamcong from './Bangchamcong.js';


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
  const [employees, setEmployees] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('Quản lý nhân sự');

  const theme = useTheme();
  const [open, setOpen] = useState(false);


  useEffect(() => {
    fetch('api/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const menuItems = [
    { title: 'Quản lý nhân sự', icon: <GroupIcon />, submenus: [
      { title: 'Duyệt chứng từ', onClick: () => handleSubmenuClick('Duyệt chứng từ') },
      { title: 'Bảng chấm công', onClick: () => handleSubmenuClick('Bảng chấm công') },
      { title: 'Đơn nghỉ', onClick: () => handleSubmenuClick('Đơn nghỉ') },
      { title: 'Vi phạm', onClick: () => handleSubmenuClick('Vi phạm') },
    ]},
    { title: 'Kinh doanh', icon: <BusinessIcon /> },
    { title: 'Hành chính nhân sự', icon: <ManageAccountsIcon /> },
    { title: 'Kế toán', icon: <AccountBalanceWalletIcon /> },
  ];

  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);
  const [isAbOpen, setIsAbOpen] = useState(false);
  const [isVipham, setIsVipham] = useState(false);
  const [isBangchamcong, setIsBangchamcong] = useState(false);
  const [newEmployeeInfo, setNewEmployeeInfo] = useState({
    name: '',
    code: '',
    email: '',
    position: '',
    status: ''
  });

  const [newEmployeeInfo1] = useState({
    name: '',
    code: '',
    email: '',
    position: '',
    status: ''
  });

  const [newEmployeeInfo2] = useState({
    name: '',
    code: '',
    email: '',
    position: '',
    status: ''
  });

  const [newEmployeeInfo3] = useState({
    name: '',
    code: '',
    email: '',
    position: '',
    status: ''
  });
  const handleAddEmployeeOpen = () => {
    setIsAddEmployeeOpen(true);
  };

  const handleAddEmployeeOpen1 = () => {
    setIsAbOpen(true);
  };

  const handleAddEmployeeOpen2 = () => {
    setIsVipham(true);
  };

  const handleAddEmployeeOpen3 = () => {
    setIsBangchamcong(true);
  };

  const handleAddEmployeeClose1 = () => {
    setIsAbOpen(false);
  };
  
  const handleAddEmployeeClose2 = () => {
    setIsVipham(false);
  };
  const handleAddEmployeeClose3 = () => {
    setIsBangchamcong(false);
  };
  const handleAddEmployeeClose = () => {
    setIsAddEmployeeOpen(false);
  };
  
  const handleConfirmAddEmployee = () => {
    // Xử lý xác nhận thêm nhân viên
    setEmployees([...employees, newEmployeeInfo]);
    handleAddEmployeeClose();
  };

  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployeeInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const [notifi, setNotifi] = useState(false);
  const [notifi1, setNotifi1] = useState(false);
  
  const notiFicaiton = () => {
    // Hiển thị thông báo xét duyệt thành công
    setNotifi(true);
  };

  const notiFicaiton1 = () => {
    // Hiển thị thông báo xét duyệt thành công
    setNotifi1(true);
  };

  const handleCloseNoti = () => {
    setNotifi(false);
  };

  const handleCloseNoti1 = () => {
    setNotifi1(false);
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem.title);
  };

  const handleSubmenuClick = (submenuTitle) => {
    setSelectedMenu(submenuTitle);
  };

  const handleAddEmployee = () => {
    handleAddEmployeeOpen();
  };

  const handleAddEmployee1 = () => {
    handleAddEmployeeOpen1();
  };

  const handleAddEmployee2 = () => {
    handleAddEmployeeOpen2();
  };
  
  const handleAddEmployee3 = () => {
    handleAddEmployeeOpen3();
  };

  const filteredEmployees = employees.filter(employee =>
    employee.employeeName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchKeyword.toLowerCase())
  );

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
          <Typography variant="h6" noWrap component="div">
            {selectedMenu}
          </Typography>
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
          {menuItems.map((menuItem) => (
            <div key={menuItem.title}>
              <ListItem key={menuItem.title} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => handleMenuClick(menuItem)}
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
              </ListItem>
              {menuItem.submenus && selectedMenu === menuItem.title && (
                <List>
                  {menuItem.submenus.map((submenu) => (
                    <ListItemButton key={submenu.title} onClick={submenu.onClick}>
                      <ListItemText primary={submenu.title} />
                    </ListItemButton>
                  ))}
                </List>
              )}
            </div>
          ))}
        </List>

        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {selectedMenu === 'Quản lý nhân sự' && (
          <Box>
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
                  <TotalEmployeesTab totalEmployees={100} />
                </div>
                <div style={{ marginLeft: '24px' }}>
                  <NewEmployeesTab newEmployeesCount={10} />
                </div>
                <div style={{ marginLeft: '24px' }}>
                  <LeaveByPolicyEmployeesTab leaveByPolicyEmployeesCount={3} />
                </div>
              </Box>
          </Box>
        )}

        {selectedMenu === 'Duyệt chứng từ' && (
          <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" onClick={notiFicaiton}>Xét duyệt</Button>
                <Button variant="contained" onClick={notiFicaiton1}>Từ chối</Button>

                <Snackbar
                  open={notifi}
                  autoHideDuration={3000}
                  onClose={handleCloseNoti}
                  message="Xét duyệt thành công!"
                />

                <Snackbar
                  open={notifi1}
                  autoHideDuration={3000}
                  onClose={handleCloseNoti1}
                  message="Từ chối thành công!"
                />
              </Box>
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
                <div style={{ marginLeft: '24px' }}>
                  <Aprroved approved={5} />
                </div>
                <div style={{ marginLeft: '24px' }}>
                  <DApproved dapp={3} />
                </div>
              </Box>
              <Box sx={{ overflow: 'auto', marginTop: '24px' }}>
              <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 200px)' }}>
                <Table sx={{ minWidth: 650, overflow: 'auto' }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <HighlightedTableCell align="left">Loại chứng từ</HighlightedTableCell>
                      <HighlightedTableCell align="left">Tên nhân viên</HighlightedTableCell>
                      <HighlightedTableCell align="left">Mã nhân viên</HighlightedTableCell>
                      <HighlightedTableCell align="left">Email</HighlightedTableCell>
                      <HighlightedTableCell align="left">Tình trạng</HighlightedTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredEmployees.map((row) => (
                      <TableRow key={row.employeeName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="left" component="th" scope="row">
                          {row.employeeName}
                        </TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          
        )}

        {selectedMenu === 'Đơn nghỉ' && (
          <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" onClick={handleAddEmployee1}>Lập đơn nghỉ</Button>
            

      
              </Box>
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
              <Box sx={{ overflow: 'auto', marginTop: '24px' }}>
              <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 200px)' }}>
                <Table sx={{ minWidth: 650, overflow: 'auto' }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <HighlightedTableCell align="left">Mã nhân viên</HighlightedTableCell>
                      <HighlightedTableCell align="left">Tên nhân viên</HighlightedTableCell>
                      <HighlightedTableCell align="left">Email</HighlightedTableCell>
                      <HighlightedTableCell align="left">Chức vụ</HighlightedTableCell>
                      <HighlightedTableCell align="left">Lý do</HighlightedTableCell>
                      <HighlightedTableCell align="left">Loại đơn</HighlightedTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredEmployees.map((row) => (
                      <TableRow key={row.employeeName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="left" component="th" scope="row">
                          {row.employeeName}
                        </TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          
        )}

        {selectedMenu === 'Vi phạm' && (
          <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" onClick={handleAddEmployee2}>Xét vi phạm</Button>
              </Box>
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
              <Box sx={{ overflow: 'auto', marginTop: '24px' }}>
              <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 200px)' }}>
                <Table sx={{ minWidth: 650, overflow: 'auto' }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <HighlightedTableCell align="left">Mã nhân viên</HighlightedTableCell>
                      <HighlightedTableCell align="left">Tên nhân viên</HighlightedTableCell>
                      <HighlightedTableCell align="left">Loại vi phạm</HighlightedTableCell>
                      <HighlightedTableCell align="left">Mức độ</HighlightedTableCell>
                      <HighlightedTableCell align="left">Tình trạng</HighlightedTableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredEmployees.map((row) => (
                      <TableRow key={row.employeeName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="left" component="th" scope="row">
                          {row.employeeName}
                        </TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          
        )}

        {selectedMenu === 'Bảng chấm công' && (
          <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" onClick={handleAddEmployee3}>Chỉnh sửa</Button>
              </Box>
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
              <Box sx={{ overflow: 'auto', marginTop: '24px' }}>
              <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 200px)' }}>
                <Table sx={{ minWidth: 650, overflow: 'auto' }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <HighlightedTableCell align="left">Mã nhân viên</HighlightedTableCell>
                      <HighlightedTableCell align="left">Tên nhân viên</HighlightedTableCell>
                      <HighlightedTableCell align="left">Thời gian vào</HighlightedTableCell>
                      <HighlightedTableCell align="left">Thời gian ra</HighlightedTableCell>
                      <HighlightedTableCell align="left">Tổng giờ làm</HighlightedTableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredEmployees.map((row) => (
                      <TableRow key={row.employeeName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="left" component="th" scope="row">
                          {row.employeeName}
                        </TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          
        )}


      </Box>
      <AddEmployee
          open={isAddEmployeeOpen}
          handleClose={handleAddEmployeeClose}
          handleConfirmAddEmployee={handleConfirmAddEmployee}
          employeeInfo={newEmployeeInfo}
          handleInputChange={handleInputChange}
        />

      <Absence
          open1={isAbOpen}
          handleClose1={handleAddEmployeeClose1}
          
          employeeInfo1={newEmployeeInfo1}
          
        />

      <Vipham
          open2={isVipham}
          handleClose2={handleAddEmployeeClose2}
          
          employeeInfo2={newEmployeeInfo2}
          
        />

      <Bangchamcong
          open3={isBangchamcong}
          handleClose3={handleAddEmployeeClose3}
          
          employeeInfo3={newEmployeeInfo3}
          
        />



      

    </Box>
  );
}