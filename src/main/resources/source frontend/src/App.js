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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CompanyLogo from './logo.svg';

const drawerWidth = 320;

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

function EmployeeTable({ employees, handleEdit, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Mã nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Tên nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Email</HighlightedTableCell>
                        <HighlightedTableCell>Chức vụ</HighlightedTableCell>
                        <HighlightedTableCell>Trạng thái</HighlightedTableCell>
                        <HighlightedTableCell>Hành động</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee) => (
                        <TableRow key={employee.employeeCode}>
                            <TableCell>{employee.employeeCode}</TableCell>
                            <TableCell>{employee.employeeName}</TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>{employee.position}</TableCell>
                            <TableCell>{employee.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(employee)}>Sửa</Button>
                                <Button onClick={() => handleDelete(employee.employeeCode)}>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function DocumentTable({ documents, handleEdit, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Loại chứng từ</HighlightedTableCell>
                        <HighlightedTableCell>Mã nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Tên người gửi</HighlightedTableCell>
                        <HighlightedTableCell>Email</HighlightedTableCell>
                        <HighlightedTableCell>Trạng thái</HighlightedTableCell>
                        <HighlightedTableCell>Hành động</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {documents.map((document) => (
                        <TableRow key={document.employeeId}>
                            <TableCell>{document.documentType}</TableCell>
                            <TableCell>{document.employeeId}</TableCell>
                            <TableCell>{document.senderName}</TableCell>
                            <TableCell>{document.email}</TableCell>
                            <TableCell>{document.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(document)}>Sửa</Button>
                                <Button onClick={() => handleDelete(document.employeeId)}>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function LeaveRequestTable({ leaveRequests, handleEdit, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Mã nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Tên nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Email</HighlightedTableCell>
                        <HighlightedTableCell>Chức vụ</HighlightedTableCell>
                        <HighlightedTableCell>Lý do</HighlightedTableCell>
                        <HighlightedTableCell>Loại yêu cầu</HighlightedTableCell>
                        <HighlightedTableCell>Hành động</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {leaveRequests.map((request) => (
                        <TableRow key={request.employeeId}>
                            <TableCell>{request.employeeId}</TableCell>
                            <TableCell>{request.employeeName}</TableCell>
                            <TableCell>{request.email}</TableCell>
                            <TableCell>{request.position}</TableCell>
                            <TableCell>{request.reason}</TableCell>
                            <TableCell>{request.requestType}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(request)}>Sửa</Button>
                                <Button onClick={() => handleDelete(request.employeeId)}>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function ViolationTable({ violations, handleEdit, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Mã nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Tên nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Loại vi phạm</HighlightedTableCell>
                        <HighlightedTableCell>Mức độ nghiêm trọng</HighlightedTableCell>
                        <HighlightedTableCell>Trạng thái</HighlightedTableCell>
                        <HighlightedTableCell>Hành động</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {violations.map((violation) => (
                        <TableRow key={violation.employeeId}>
                            <TableCell>{violation.employeeId}</TableCell>
                            <TableCell>{violation.employeeName}</TableCell>
                            <TableCell>{violation.violationType}</TableCell>
                            <TableCell>{violation.severity}</TableCell>
                            <TableCell>{violation.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(violation)}>Sửa</Button>
                                <Button onClick={() => handleDelete(violation.employeeId)}>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function TimesheetTable({ timesheets, handleEdit, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <HighlightedTableCell>Mã nhân viên</HighlightedTableCell>
                        <HighlightedTableCell>Ngày</HighlightedTableCell>
                        <HighlightedTableCell>Giờ làm việc</HighlightedTableCell>
                        <HighlightedTableCell>Trạng thái</HighlightedTableCell>
                        <HighlightedTableCell>Hành động</HighlightedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {timesheets.map((timesheet) => (
                        <TableRow key={timesheet.employeeId}>
                            <TableCell>{timesheet.employeeId}</TableCell>
                            <TableCell>{timesheet.date}</TableCell>
                            <TableCell>{timesheet.hoursWorked}</TableCell>
                            <TableCell>{timesheet.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(timesheet)}>Sửa</Button>
                                <Button onClick={() => handleDelete(timesheet.employeeId)}>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default function MiniDrawer() {
    const [employees, setEmployees] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [leaveRequests, setLeaveRequests] = useState([]);
    const [violations, setViolations] = useState([]);
    const [timesheets, setTimesheets] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedMenu, setSelectedMenu] = useState('Quản lý nhân sự');
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    // State and handlers for dialog
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogType, setDialogType] = useState('');
    const [employeeInfo, setEmployeeInfo] = useState({
        employeeName: '',
        employeeCode: '',
        email: '',
        position: '',
        status: ''
    });
    const [documentInfo, setDocumentInfo] = useState({
        documentType: '',
        employeeId: '',
        senderName: '',
        email: '',
        status: ''
    });
    const [leaveRequestInfo, setLeaveRequestInfo] = useState({
        employeeId: '',
        employeeName: '',
        email: '',
        position: '',
        reason: '',
        requestType: ''
    });
    const [violationInfo, setViolationInfo] = useState({
        employeeId: '',
        employeeName: '',
        violationType: '',
        severity: '',
        status: ''
    });
    const [timesheetInfo, setTimesheetInfo] = useState({
        employeeId: '',
        date: '',
        hoursWorked: '',
        status: ''
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        /* 
        // 16/4: Lấy dữ liệu nhân viên từ API 
        fetch('api/employees')
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.error('Lỗi khi lấy dữ liệu nhân viên:', error));
        */
    }, []);

    const handleSubmenuClick = (submenu) => {
        /*
        // 16/4: Lấy dữ liệu chứng từ từ API
        if (submenu.title === 'Duyệt chứng từ') {
            fetch('api/documents')
                .then(response => response.json())
                .then(data => {
                    setDocuments(data);
                })
                .catch(error => console.error('Lỗi khi lấy dữ liệu chứng từ:', error));
        } 
        // 16/4: Lấy dữ liệu đơn nghỉ từ API
        else if (submenu.title === 'Đơn nghỉ') {
            fetch('api/leaveRequests')
                .then(response => response.json())
                .then(data => {
                    setLeaveRequests(data);
                })
                .catch(error => console.error('Lỗi khi lấy dữ liệu đơn nghỉ:', error));
        } 
        // 16/4: Lấy dữ liệu vi phạm từ API
        else if (submenu.title === 'Vi phạm') {
            fetch('api/violationLists')
                .then(response => response.json())
                .then(data => {
                    setViolations(data);
                })
                .catch(error => console.error('Lỗi khi lấy dữ liệu vi phạm:', error));
        } 
        // 16/4: Lấy dữ liệu bảng chấm công từ API
        else if (submenu.title === 'Bảng chấm công') {
            fetch('api/timesheets')
                .then(response => response.json())
                .then(data => {
                    setTimesheets(data);
                })
                .catch(error => console.error('Lỗi khi lấy dữ liệu bảng chấm công:', error));
        }
        */
        setSelectedMenu(submenu.title);
    };

    const menuItems = [
        { title: 'Quản lý nhân sự', icon: <GroupIcon />, submenus: [
                { title: 'Duyệt chứng từ', onClick: () => handleSubmenuClick({ title: 'Duyệt chứng từ' }) },
                { title: 'Bảng chấm công', onClick: () => handleSubmenuClick({ title: 'Bảng chấm công' }) },
                { title: 'Đơn nghỉ', onClick: () => handleSubmenuClick({ title: 'Đơn nghỉ' }) },
                { title: 'Vi phạm', onClick: () => handleSubmenuClick({ title: 'Vi phạm' }) },
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

    const handleDialogOpen = (type) => {
        setDialogType(type);
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (dialogType) {
            case 'employee':
                setEmployeeInfo((prevInfo) => ({
                    ...prevInfo,
                    [name]: value,
                }));
                break;
            case 'document':
                setDocumentInfo((prevInfo) => ({
                    ...prevInfo,
                    [name]: value,
                }));
                break;
            case 'leaveRequest':
                setLeaveRequestInfo((prevInfo) => ({
                    ...prevInfo,
                    [name]: value,
                }));
                break;
            case 'violation':
                setViolationInfo((prevInfo) => ({
                    ...prevInfo,
                    [name]: value,
                }));
                break;
            case 'timesheet':
                setTimesheetInfo((prevInfo) => ({
                    ...prevInfo,
                    [name]: value,
                }));
                break;
            default:
                break;
        }
    };

    const handleConfirmAdd = () => {
        /*
        let url = '';
        let data = {};
        switch (dialogType) {
            case 'employee':
                url = 'api/employees';
                data = employeeInfo;
                break;
            case 'document':
                url = 'api/documents';
                data = documentInfo;
                break;
            case 'leaveRequest':
                url = 'api/leaveRequests';
                data = leaveRequestInfo;
                break;
            case 'violation':
                url = 'api/violations';
                data = violationInfo;
                break;
            case 'timesheet':
                url = 'api/timesheets';
                data = timesheetInfo;
                break;
            default:
                break;
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Lỗi mạng');
                }
                return response.json();
            })
            .then(data => {
                switch (dialogType) {
                    case 'employee':
                        setEmployees([...employees, data]);
                        break;
                    case 'document':
                        setDocuments([...documents, data]);
                        break;
                    case 'leaveRequest':
                        setLeaveRequests([...leaveRequests, data]);
                        break;
                    case 'violation':
                        setViolations([...violations, data]);
                        break;
                    case 'timesheet':
                        setTimesheets([...timesheets, data]);
                        break;
                    default:
                        break;
                }
                setSnackbarMessage('Thêm thành công');
                setSnackbarOpen(true);
                setDialogOpen(false);
            })
            .catch(error => {
                console.error('Lỗi khi thêm:', error);
                setSnackbarMessage('Lỗi khi thêm');
                setSnackbarOpen(true);
            });
        */
    };

    const handleDelete = (type, id) => {
        /*
        let url = '';
        switch (type) {
            case 'employee':
                url = `api/employees/${id}`;
                break;
            case 'document':
                url = `api/documents/${id}`;
                break;
            case 'leaveRequest':
                url = `api/leaveRequests/${id}`;
                break;
            case 'violation':
                url = `api/violations/${id}`;
                break;
            case 'timesheet':
                url = `api/timesheets/${id}`;
                break;
            default:
                break;
        }

        fetch(url, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    switch (type) {
                        case 'employee':
                            setEmployees(employees.filter(emp => emp.employeeCode !== id));
                            break;
                        case 'document':
                            setDocuments(documents.filter(doc => doc.employeeId !== id));
                            break;
                        case 'leaveRequest':
                            setLeaveRequests(leaveRequests.filter(req => req.employeeId !== id));
                            break;
                        case 'violation':
                            setViolations(violations.filter(vio => vio.employeeId !== id));
                            break;
                        case 'timesheet':
                            setTimesheets(timesheets.filter(ts => ts.employeeId !== id));
                            break;
                        default:
                            break;
                    }
                }
            })
            .catch(error => console.error('Lỗi khi xóa:', error));
        */
    };

    const handleEdit = (type, item) => {
        // Hàm xử lý sửa thông tin
    };

    const filteredEmployees = employees.filter(employee =>
        employee.employeeName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const filteredDocuments = documents.filter(document =>
        document.documentType.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        document.senderName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        document.email.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const filteredLeaveRequests = leaveRequests.filter(request =>
        request.employeeName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        request.email.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        request.reason.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const filteredViolations = violations.filter(violation =>
        violation.employeeName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        violation.violationType.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const filteredTimesheets = timesheets.filter(timesheet =>
        timesheet.employeeId.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        timesheet.date.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        timesheet.status.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
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
                <TextField
                    label="Tìm kiếm"
                    variant="outlined"
                    value={searchKeyword}
                    onChange={handleSearch}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ marginBottom: 2 }}
                />
                {selectedMenu === 'Quản lý nhân sự' && (
                    <>
                        <Button variant="contained" onClick={() => handleDialogOpen('employee')}sx={{ marginLeft: 2, marginBottom: 2 }}>Thêm nhân viên</Button>
                        <EmployeeTable employees={filteredEmployees} handleEdit={(item) => handleEdit('employee', item)} handleDelete={(id) => handleDelete('employee', id)} />
                    </>
                )}
                {selectedMenu === 'Duyệt chứng từ' && (
                    <>
                        <Button variant="contained" onClick={() => handleDialogOpen('document')}sx={{ marginLeft: 2, marginBottom: 2 }}>Thêm chứng từ</Button>
                        <DocumentTable documents={filteredDocuments} handleEdit={(item) => handleEdit('document', item)} handleDelete={(id) => handleDelete('document', id)} />
                    </>
                )}
                {selectedMenu === 'Đơn nghỉ' && (
                    <>
                        <Button variant="contained" onClick={() => handleDialogOpen('leaveRequest')}sx={{ marginLeft: 2, marginBottom: 2 }}>Thêm đơn nghỉ</Button>
                        <LeaveRequestTable leaveRequests={filteredLeaveRequests} handleEdit={(item) => handleEdit('leaveRequest', item)} handleDelete={(id) => handleDelete('leaveRequest', id)} />
                    </>
                )}
                {selectedMenu === 'Vi phạm' && (
                    <>
                        <Button variant="contained" onClick={() => handleDialogOpen('violation')}sx={{ marginLeft: 2, marginBottom: 2 }}>Thêm vi phạm</Button>
                        <ViolationTable violations={filteredViolations} handleEdit={(item) => handleEdit('violation', item)} handleDelete={(id) => handleDelete('violation', id)} />
                    </>
                )}
                {selectedMenu === 'Bảng chấm công' && (
                    <>
                        <Button variant="contained" onClick={() => handleDialogOpen('timesheet')}sx={{ marginLeft: 2, marginBottom: 2 }}>Thêm chấm công</Button>
                        <TimesheetTable timesheets={filteredTimesheets} handleEdit={(item) => handleEdit('timesheet', item)} handleDelete={(id) => handleDelete('timesheet', id)} />
                    </>
                )}
            </Box>
            <Dialog open={dialogOpen} onClose={handleDialogClose}>
                <DialogTitle>{`Thêm ${dialogType === 'employee' ? 'nhân viên' : dialogType === 'document' ? 'chứng từ' : dialogType === 'leaveRequest' ? 'đơn nghỉ' : dialogType === 'violation' ? 'vi phạm' : 'chấm công'} mới`}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`Nhập thông tin ${dialogType === 'employee' ? 'nhân viên' : dialogType === 'document' ? 'chứng từ' : dialogType === 'leaveRequest' ? 'đơn nghỉ' : dialogType === 'violation' ? 'vi phạm' : 'chấm công'} mới:`}
                    </DialogContentText>
                    {dialogType === 'employee' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="employeeName"
                                name="employeeName"
                                label="Tên nhân viên"
                                type="text"
                                fullWidth
                                value={employeeInfo.employeeName}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="employeeCode"
                                name="employeeCode"
                                label="Mã nhân viên"
                                type="text"
                                fullWidth
                                value={employeeInfo.employeeCode}
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
                        </>
                    )}
                    {dialogType === 'document' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="documentType"
                                name="documentType"
                                label="Loại chứng từ"
                                type="text"
                                fullWidth
                                value={documentInfo.documentType}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="employeeId"
                                name="employeeId"
                                label="Mã nhân viên"
                                type="text"
                                fullWidth
                                value={documentInfo.employeeId}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="senderName"
                                name="senderName"
                                label="Tên người gửi"
                                type="text"
                                fullWidth
                                value={documentInfo.senderName}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="email"
                                name="email"
                                label="Email"
                                type="email"
                                fullWidth
                                value={documentInfo.email}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="status"
                                name="status"
                                label="Trạng thái"
                                type="text"
                                fullWidth
                                value={documentInfo.status}
                                onChange={handleInputChange}
                            />
                        </>
                    )}
                    {dialogType === 'leaveRequest' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="employeeId"
                                name="employeeId"
                                label="Mã nhân viên"
                                type="text"
                                fullWidth
                                value={leaveRequestInfo.employeeId}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="employeeName"
                                name="employeeName"
                                label="Tên nhân viên"
                                type="text"
                                fullWidth
                                value={leaveRequestInfo.employeeName}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="email"
                                name="email"
                                label="Email"
                                type="email"
                                fullWidth
                                value={leaveRequestInfo.email}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="position"
                                name="position"
                                label="Chức vụ"
                                type="text"
                                fullWidth
                                value={leaveRequestInfo.position}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="reason"
                                name="reason"
                                label="Lý do"
                                type="text"
                                fullWidth
                                value={leaveRequestInfo.reason}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="requestType"
                                name="requestType"
                                label="Loại yêu cầu"
                                type="text"
                                fullWidth
                                value={leaveRequestInfo.requestType}
                                onChange={handleInputChange}
                            />
                        </>
                    )}
                    {dialogType === 'violation' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="employeeId"
                                name="employeeId"
                                label="Mã nhân viên"
                                type="text"
                                fullWidth
                                value={violationInfo.employeeId}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="employeeName"
                                name="employeeName"
                                label="Tên nhân viên"
                                type="text"
                                fullWidth
                                value={violationInfo.employeeName}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="violationType"
                                name="violationType"
                                label="Loại vi phạm"
                                type="text"
                                fullWidth
                                value={violationInfo.violationType}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="severity"
                                name="severity"
                                label="Mức độ nghiêm trọng"
                                type="number"
                                fullWidth
                                value={violationInfo.severity}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="status"
                                name="status"
                                label="Trạng thái"
                                type="text"
                                fullWidth
                                value={violationInfo.status}
                                onChange={handleInputChange}
                            />
                        </>
                    )}
                    {dialogType === 'timesheet' && (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="employeeId"
                                name="employeeId"
                                label="Mã nhân viên"
                                type="text"
                                fullWidth
                                value={timesheetInfo.employeeId}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="date"
                                name="date"
                                label="Ngày"
                                type="date"
                                fullWidth
                                value={timesheetInfo.date}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="hoursWorked"
                                name="hoursWorked"
                                label="Giờ làm việc"
                                type="number"
                                fullWidth
                                value={timesheetInfo.hoursWorked}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                id="status"
                                name="status"
                                label="Trạng thái"
                                type="text"
                                fullWidth
                                value={timesheetInfo.status}
                                onChange={handleInputChange}
                            />
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Hủy</Button>
                    <Button onClick={handleConfirmAdd}>Xác nhận</Button>
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
