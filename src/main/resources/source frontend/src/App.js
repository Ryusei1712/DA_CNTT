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
            .catch(error => console.error('Lỗi khi lấy dữ liệu nhân viên:', error));
    }, []);

    const handleSubmenuClick = (submenu) => {
        if (submenu.title === 'Duyệt chứng từ') {
            fetch('api/documents')
                .then(response => response.json())
                .then(data => {
                    console.log('Dữ liệu chứng từ:', data);
                })
                .catch(error => console.error('Lỗi khi lấy dữ liệu chứng từ:', error));
        } else if (submenu.title === 'Đơn nghỉ') {
            fetch('api/leaveRequests')
                .then(response => response.json())
                .then(data => {
                    console.log('Dữ liệu đơn nghỉ:', data);
                })
                .catch(error => console.error('Lỗi khi lấy dữ liệu đơn nghỉ:', error));
        } else if (submenu.title === 'Vi phạm') {
            fetch('api/violationLists')
                .then(response => response.json())
                .then(data => {
                    console.log('Dữ liệu vi phạm:', data);
                })
                .catch(error => console.error('Lỗi khi lấy dữ liệu vi phạm:', error));
        }
        setSelectedMenu(submenu.title);
    };

    const menuItems = [
        { title: 'Quản lý nhân sự', icon: <GroupIcon />, submenus: [
                { title: 'Duyệt chứng từ', onClick: ()=> handleSubmenuClick('Duyệt chứng từ') },
                { title: 'Bảng chấm công', onClick: () => handleSubmenuClick('Bảng chấm công') },
                { title: 'Đơn nghỉ', onClick: () => handleSubmenuClick('Đơn nghỉ') },
                { title: 'Vi phạm', onClick: () => handleSubmenuClick('Vi phạm') },
            ]},
        { title: 'Kinh doanh', icon: <BusinessIcon /> },
        { title: 'Hành chính nhân sự', icon: <ManageAccountsIcon /> },
        { title: 'Kế toán', icon: <AccountBalanceWalletIcon /> },
    ];

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value);
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
                                    onClick={() => setSelectedMenu(menuItem.title)}
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
                                        <ListItemButton key={submenu.title} onClick={() => handleSubmenuClick(submenu)}>
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
                {/* Contents based on selected menu */}
            </Box>
        </Box>
    );
}

