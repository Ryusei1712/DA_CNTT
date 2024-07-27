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
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FactoryIcon from '@mui/icons-material/Factory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CompanyLogo from './logo.svg';
import EmployeeTable from './EmployeeTable'; // Import the EmployeeTable component
import DocumentTable from './DocumentTable';
import LeaveRequestTable from './LeaveRequestTable'; // Import the LeaveRequestTable component
import ViolationTable from './ViolationTable'; // Import the ViolationTable component
import TimesheetTable from './TimesheetTable'; // Import the TimesheetTable component
import DialogComponent from './DialogComponent'; // Import DialogComponent

import ProductDM from './ProductDM';
import QualityControl from './QualityControl';
import Packaging from './Packaging';
import Depreciation from './Depreciation';
import WorkOrder from './WorkOrder';

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
export default function MiniDrawer() {
    const [employees, setEmployees] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [leaveRequests, setLeaveRequests] = useState([]);
    const [violations, setViolations] = useState([]);
    const [timesheets, setTimesheets] = useState([]);
    
    const [productDMs, setProductDMs] = useState([]);
    const [qualityControls, setQualityControls] = useState([]);
    const [packagings, setPackagings] = useState([]);
    const [depreciations, setDepreciations] = useState([]);
    const [workOrders, setWorkOrders] = useState([]);

    const [searchKeyword, setSearchKeyword] = useState('');

    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('');
    const [openSubmenu, setOpenSubmenu] = useState(false);

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
    
    const [ProductDMInfo, setProductDMInfo] = useState({
        productDMName: '',
        productDMQuantity: '',
        productDMUnit: '',
    });
    const [QualityControlInfo, setQualityControlInfo] = useState({
        inspector: '',
        productRun: '',
        qualityResult: '',
    });
    const [PackagingInfo, setPackagingInfo] = useState({
        packagingDate: '',
        productID: '',
        productRun: '',
    });
    const [DepreciationInfo, setDepreciationInfo] = useState({
        productRun: '',
        numberOfCancellations: '',
        status: '',
    });
    const [WorkOrderInfo, setWorkOrderInfo] = useState({
        workOrderDate: '',
        sequence: '',
        status: '',
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
    const handleMenuClick = (menuItem) => {
        if (menuItem.title === selectedMenu && openSubmenu) {
          setOpenSubmenu(false);
        } else if (menuItem.submenus) {
          setSelectedMenu(menuItem.title);
          setOpenSubmenu(true);
        } else {
          setSelectedMenu(menuItem.title);
          setOpenSubmenu(false);
        }
      };
      const menuItems = [
        { title: 'Quản lý nhân sự', icon: <GroupIcon />, submenus: [
            { title: 'Duyệt chứng từ', onClick: () => handleSubmenuClick({ title: 'Duyệt chứng từ' }) },
            { title: 'Bảng chấm công', onClick: () => handleSubmenuClick({ title: 'Bảng chấm công' }) },
            { title: 'Đơn nghỉ', onClick: () => handleSubmenuClick({ title: 'Đơn nghỉ' }) },
            { title: 'Vi phạm', onClick: () => handleSubmenuClick({ title: 'Vi phạm' }) },
          ]},
        { title: 'Quản lý Sản Xuất', icon: <FactoryIcon />,  submenus: [
            { title: 'Quản lý định mức', onClick: () => handleSubmenuClick({ title: 'Quản lý định mức' }) },
            { title: 'Quản lý công đoạn', onClick: () => handleSubmenuClick({ title: 'Quản lý công đoạn' }) },
            { title: 'Quản lý chất lượng', onClick: () => handleSubmenuClick({ title: 'Quản lý chất lượng' }) },
            { title: 'Quản lý đóng gói', onClick: () => handleSubmenuClick({ title: 'Quản lý đóng gói' }) },
            { title: 'Quản lý khấu hao', onClick: () => handleSubmenuClick({ title: 'Quản lý khấu hao' }) },
          ]},
        { title: 'Kinh doanh', icon: <BusinessIcon /> },
        { title: 'Logistic', icon: <LocalShippingIcon /> },
        
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
            
            case 'productDM':
                setProductDMInfo((prevInfo) => ({
                    ...prevInfo,
                    [name]: value,
                }));
                break;
            case 'qualityControl':
                setQualityControlInfo((prevInfo) => ({
                    ...prevInfo,
                    [name]: value,
                }));
                break;
            case 'packaging':
                setPackagingInfo((prevInfo) => ({
                    ...prevInfo,
                    [name]: value,
                }));
                break;
            case 'depreciation':
                setDepreciationInfo((prevInfo) => ({
                    ...prevInfo,
                    [name]: value,
                }));
                break;
            case 'workOrder':
                setWorkOrderInfo((prevInfo) => ({
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
    
    const filteredProductDMs = productDMs.filter(productDM =>
        productDM.productDMName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        productDM.productDMQuantity.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        productDM.productDMUnit.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const filteredQualityControls = qualityControls.filter(qualityControl =>
        qualityControl.inspector.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        qualityControl.productRun.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        qualityControl.qualityResult.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    const filteredPackagings = packagings.filter(packaging =>
        packaging.packagingDate.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        packaging.productID.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        packaging.productRun.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    const filteredDepreciations = depreciations.filter(depreciation =>
        depreciation.productRun.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        depreciation.numberOfCancellations.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        depreciation.status.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    const filteredWorkOrders = workOrders.filter(workOrder =>
        workOrder.workOrderDate.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        workOrder.sequence.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        workOrder.status.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };
    return (
    <> 
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
                                    {menuItem.submenus && (selectedMenu === menuItem.title ? (openSubmenu ? <ExpandLess /> : <ExpandMore />) : null)}
                                </ListItemButton>
                                {menuItem.submenus && (
                                <Collapse in={openSubmenu && selectedMenu === menuItem.title} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                    {menuItem.submenus.map((submenu) => (
                                        <ListItemButton key={submenu.title} onClick={() => handleSubmenuClick(submenu)} sx={{ pl: 4 }}>
                                        <ListItemText primary={submenu.title} />
                                        </ListItemButton>
                                    ))}
                    </List>
                  </Collapse>
                )}
              </ListItem>
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
                {/* Quản lý định mức sản xuất , Buoc 6 */}
                {selectedMenu === 'Quản lý định mức' && (
                    <>
                        <Button variant="contained" sx={{ marginLeft: 2, marginBottom: 2 }}>Xuất File</Button>
                        <ProductDM productDMs={filteredProductDMs} handleEdit={(item) => handleEdit('productDM', item)} handleDelete={(id) => handleDelete('productDM', id)} />
                    </>
                )}
                {selectedMenu === 'Quản lý công đoạn' && (
                    <>
                        
                        <WorkOrder workOrders={filteredWorkOrders} />
                
                        
                    </>
                )}
                {selectedMenu === 'Quản lý chất lượng' && (
                    <>
                        <QualityControl qualityControls={filteredQualityControls} handleEdit={(item) => handleEdit('qualityControl', item)} handleDelete={(id) => handleDelete('qualityControl', id)} />
                    </>
                )}
                {selectedMenu === 'Quản lý đóng gói' && (
                    <>
                        <Button variant="contained" sx={{ marginLeft: 2, marginBottom: 2 }}>Xuất File</Button>
                        <Packaging packagings={filteredPackagings} />
                    </>
                )}
                {selectedMenu === 'Quản lý khấu hao' && (
                    <>
                        <Button variant="contained" sx={{ marginLeft: 2, marginBottom: 2 }}>Xuất File</Button>
                        <Depreciation depreciations={filteredDepreciations} handleDelete={(id) => handleDelete('depreciation', id)} />
                    </>
                )}
            </Box>
        </Box>
        <div> 
            <DialogComponent
                dialogOpen={dialogOpen}
                handleDialogClose={handleDialogClose}
                dialogType={dialogType}
                employeeInfo={employeeInfo}
                documentInfo={documentInfo}
                leaveRequestInfo={leaveRequestInfo}
                violationInfo={violationInfo}
                timesheetInfo={timesheetInfo}
              
                ProductDMInfo={ProductDMInfo}
                QualityControlInfo={QualityControlInfo}
                PackagingInfo={PackagingInfo}
                DepreciationInfo={DepreciationInfo}
                WorkOrderInfo={WorkOrderInfo}
                handleInputChange={handleInputChange}
                handleConfirmAdd={handleConfirmAdd}
                snackbarOpen={snackbarOpen}
                handleCloseSnackbar={handleCloseSnackbar}
                snackbarMessage={snackbarMessage}
            />
        </div>
    </>
    );
}
