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

import useExportToExcel from "./useExportToExcel";
import {TableCell} from "@mui/material";
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
        id: '',
        productDMName: '',
        productDMQuantity: '',
        productDMUnit: '',
    });
    const [QualityControlInfo, setQualityControlInfo] = useState({
        id:'',
        inspector: '',
        productRun: '',
        qualityResult: '',
        resultDate: '',
        approved:'',
    });
    const [PackagingInfo, setPackagingInfo] = useState({
        id:'',
        packagingDate: '',
        inspector:'',
        productID: '',
        productRun: '',
        quality:'',
    });
    const [DepreciationInfo, setDepreciationInfo] = useState({
        id:'',
        productRun: '',
        numberOfCancellations: '',
        status: '',
    });
    const [WorkOrderInfo, setWorkOrderInfo] = useState({
        id: '',
        productionLine: '',
        workOrderDate: '',
        sequence: '',
        status: '',
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const fetchEmployees = () => {
        fetch('http://localhost:8081/api/employees')
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.error('Lỗi khi lấy dữ liệu nhân viên:', error));
    };

    const fetchTimesheets = () => {
        fetch('http://localhost:8081/api/timesheets')
            .then(response => response.json())
            .then(data => {setTimesheets(data);})
            .catch(error => console.error('Lỗi khi lấy dữ liệu bảng chấm công:', error));
    };

    const fetchDocuments = () => {
        fetch('http://localhost:8081/api/documents')
            .then(response => response.json())
            .then(data => {
                setDocuments(data);
            })
            .catch(error => console.error('Lỗi khi lấy dữ liệu chứng từ:', error));
    };

    const fetchLeaveRequests = () => {
        fetch('http://localhost:8081/api/leaveRequests')
            .then(response => response.json())
            .then(data => {
                setLeaveRequests(data);
            })
            .catch(error => console.error('Lỗi khi lấy dữ liệu đơn nghỉ:', error));
    };

    const  fetchViolations = () => {
        fetch('http://localhost:8081/api/violationLists')
            .then(response => response.json())
            .then(data => {
                setViolations(data);
            })
            .catch(error => console.error('Lỗi khi lấy dữ liệu vi phạm:', error));
    };
    const  fetchProductDM = () => {
        fetch('http://localhost:8082/api/production/boms')
            .then(response => response.json())
            .then(data => {
                setProductDMs(data);
            })
            .catch(error => console.error('Lỗi khi lấy dữ liệu quản lý định mức:', error));
    };
    const  fetchQualityControl = () => {
        fetch('http://localhost:8082/api/production/qualitycontrols')
            .then(response => response.json())
            .then(data => {
                setQualityControls(data);
            })
            .catch(error => console.error('Lỗi khi lấy dữ liệu quản lý chất luượng:', error));
    };
    const  fetchPakaging = () => {
        fetch('http://localhost:8082/api/production/packagings')
            .then(response => response.json())
            .then(data => {
                setPackagings(data);
            })
            .catch(error => console.error('Lỗi khi lấy dữ liệu quản lý đóng gói:', error));
    };
    const  fetchDepreciation = () => {
        fetch('http://localhost:8082/api/production/depreciation')
            .then(response => response.json())
            .then(data => {
                setDepreciations(data);
            })
            .catch(error => console.error('Lỗi khi lấy dữ liệu quản lý khấu hao:', error));
    };
    const  fetchWorkOrder = () => {
        fetch('http://localhost:8082/api/production/workorder')
            .then(response => response.json())
            .then(data => {
                setWorkOrders(data);
            })
            .catch(error => console.error('Lỗi khi lấy dữ liệu quản lý công đoạn:', error));
    };
    const exportProductDM = useExportToExcel(productDMs, 'quan_ly_dinh_muc.xlsx', 'Quản lý định mức');
    const exportPackaging = useExportToExcel(packagings, 'quan_ly_dong_goi.xlsx', 'Quản lý đóng gói');
    const exportDepreciation = useExportToExcel(depreciations, 'quan_ly_khau_hao.xlsx', 'Quản lý khấu hao');
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {
        fetchEmployees();
    }, []);
    const handleSubmenuClick = (submenu) => {
        if (submenu.title === 'Duyệt chứng từ') {
            fetchDocuments();
        }else if (submenu.title === 'Đơn nghỉ') {
            fetchLeaveRequests();
        }else if (submenu.title === 'Vi phạm') {
            fetchViolations();
        }else if (submenu.title === 'Bảng chấm công') {
            fetchTimesheets();
        }else if (submenu.title === 'Quản lý định mức') {
            fetchProductDM();
        }else if(submenu.title === 'Quản lý công đoạn'){
            fetchWorkOrder();
        }else if(submenu.title === 'Quản lý chất lượng'){
            fetchQualityControl();
        }else if(submenu.title === 'Quản lý đóng gói'){
            fetchPakaging();
        }else if(submenu.title === 'Quản lý khấu hao'){
            fetchDepreciation();
        }
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
        let url = '';
        let data = {};
        switch (dialogType) {
            case 'employee':
                url = 'http://localhost:8081/api/employees';
                data = employeeInfo;
                break;
            case 'document':
                url = 'http://localhost:8081/api/documents';
                data = documentInfo;
                break;
            case 'leaveRequest':
                url = 'http://localhost:8081/api/leaveRequests';
                data = leaveRequestInfo;
                break;
            case 'violation':
                url = 'http://localhost:8081/api/violationLists';
                data = violationInfo;
                break;
            case 'timesheet':
                url = 'http://localhost:8081/api/timesheets';
                data = timesheetInfo;
                break;
            case 'productDM':
                url = 'http://localhost:8082/api/production/boms';
                data = ProductDMInfo;
                break;
            case 'qualityControl':
                url = 'http://localhost:8082/api/production/qualitycontrols';
                data = QualityControlInfo;
                break;
            case 'packaging':
                url = 'http://localhost:8082/api/production/packagings';
                data = PackagingInfo;
                break;
            default:
                break;
        }
        console.log('Data to be sent for adding:', data);
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
                        fetchEmployees();
                        break;
                    case 'document':
                        fetchDocuments();
                        break;
                    case 'leaveRequest':
                        fetchLeaveRequests();
                        break;
                    case 'violation':
                        fetchViolations();
                        break;
                    case 'timesheet':
                        fetchTimesheets();
                        break;
                    case 'productDM':
                        fetchProductDM();
                        break;
                    case 'qualityControl':
                        fetchProductDM();
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
    };
    const handleDelete = (type, id) => {
        let url = '';
        switch (type) {
            case 'employee':
                url = `http://localhost:8081/api/employees/${id}`;
                break;
            case 'document':
                url = `http://localhost:8081/api/documents/${id}`;
                break;
            case 'leaveRequest':
                url = `http://localhost:8081/api/leaveRequests/${id}`;
                break;
            case 'violation':
                url = `http://localhost:8081/api/violationLists/${id}`;
                break;
            case 'timesheet':
                url = `http://localhost:8081/api/timesheets/${id}`;
                break;
            case 'productDM':
                url = `http://localhost:8082/api/production/boms/${id}`;
                break;
            case 'qualityControl':
                url = `http://localhost:8082/api/production/qualitycontrols/${id}`;
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
                            fetchEmployees();
                            break;
                        case 'document':
                            fetchDocuments();
                            break;
                        case 'leaveRequest':
                            fetchLeaveRequests();
                            break;
                        case 'violation':
                            fetchViolations();
                            break;
                        case 'timesheet':
                            fetchTimesheets();
                            break;
                        case 'productDM':
                            fetchProductDM();
                            break;
                        case 'qualityControl':
                            fetchQualityControl();
                            break;
                        default:
                            break;
                    }
                }
            })
            .catch(error => console.error('Lỗi khi xóa:', error));
        setSnackbarMessage('Xóa thành công');
        setSnackbarOpen(true);
    };
    const handleEdit = (type, item) => {
        setEditMode(true);
        setDialogType(type);
        switch (type) {
            case 'employee':
                setEmployeeInfo(item);
                break;
            case 'document':
                setDocumentInfo(item);
                break;
            case 'leaveRequest':
                setLeaveRequestInfo(item);
                break;
            case 'violation':
                setViolationInfo(item);
                break;
            case 'timesheet':
                setTimesheetInfo(item);
                break;
            case 'productDM':
                setProductDMInfo(item);
                break;
            default:
                break;
        }
        setDialogOpen(true);
    };

    const handleConfirmEdit = () => {
        let url = '';
        let data = {};
        switch (dialogType) {
            case 'employee':
                url = `http://localhost:8081/api/employees/${employeeInfo.id}`;
                data = employeeInfo;
                break;
            case 'document':
                url = `http://localhost:8081/api/documents/${documentInfo.id}`;
                data = documentInfo;
                break;
            case 'leaveRequest':
                url = `http://localhost:8081/api/leaveRequests/${leaveRequestInfo.id}`;
                data = leaveRequestInfo;
                break;
            case 'violation':
                url = `http://localhost:8081/api/violationLists/${violationInfo.id}`;
                data = violationInfo;
                break;
            case 'timesheet':
                url = `http://localhost:8081/api/timesheets/${timesheetInfo.id}`;
                data = timesheetInfo;
                break;
            case 'productDM':
                url = `http://localhost:8082/api/production/boms/${ProductDMInfo.id}`;
                data = ProductDMInfo;
                break;
            case 'qualityControl':
                url = `http://localhost:8082/api/production/qualitycontrols/${QualityControlInfo.id}`;
                data = QualityControlInfo;
                break;
            case 'depreciation':
                url = `http://localhost:8082/api/production/depreciation/${DepreciationInfo.id}`;
                data = DepreciationInfo;
                break;
            default:
                break;
        }

        fetch(url, {
            method: 'PUT',
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
            .then(updatedItem => {
                switch (dialogType) {
                    case 'employee':
                        fetchEmployees();
                        break;
                    case 'document':
                        fetchDocuments();
                        break;
                    case 'leaveRequest':
                        fetchLeaveRequests();
                        break;
                    case 'violation':
                        fetchViolations()
                        break;
                    case 'timesheet':
                        fetchTimesheets();
                        break;
                    case 'productDM':
                        fetchProductDM();
                        break;
                    case 'qualityControl':
                        fetchDepreciation();
                        break;
                    case 'depreciation':
                        fetchDepreciation();
                        break;
                    default:
                        break;
                }
                setSnackbarMessage('Cập nhật thành công');
                setSnackbarOpen(true);
                setDialogOpen(false);
                setEditMode(false);
            })
            .catch(error => {
                console.error('Lỗi khi cập nhật:', error);
                setSnackbarMessage('Lỗi khi cập nhật');
                setSnackbarOpen(true);
            });
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
        timesheet.employeeCode.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        timesheet.date.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        timesheet.status.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    
    const filteredProductDMs = productDMs.filter(productDM =>
        productDM.productDMName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        productDM.productDMQuantity.toString().toLowerCase().includes(searchKeyword.toLowerCase()) ||
        productDM.productDMUnit.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const filteredQualityControls = qualityControls.filter(qualityControl =>
        qualityControl.inspector.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        qualityControl.productRun.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        qualityControl.qualityResult.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        qualityControl.resultDate.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    const filteredPackagings = packagings.filter(packaging =>
        packaging.packagingDate.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        packaging.productID.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        packaging.productRun.toLowerCase().includes(searchKeyword.toLowerCase())||
        packaging.inspector.toLowerCase().includes(searchKeyword.toLowerCase())||
        packaging.quality.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    const filteredDepreciations = depreciations.filter(depreciation =>
        depreciation.productRun.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        depreciation.numberOfCancellations.toString().toLowerCase().includes(searchKeyword.toLowerCase()) ||
        depreciation.status.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    const filteredWorkOrders = workOrders.filter(workOrder =>
        workOrder.productionLine.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        workOrder.workOrderDate.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        workOrder.sequence.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        workOrder.status.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const handleDialogOpen = (type, data = {}) => {
        // console.log('Dialog type:', type);
        // console.log('Data:', data);
        setDialogType(type);
        setDialogOpen(true);
        setEditMode(false);

        switch (type) {
            case 'employee':
                setEmployeeInfo({
                    id: '',
                    employeeName: '',
                    employeeCode: '',
                    email: '',
                    position: '',
                    status: ''
                });
                break;
            case 'document':
                setDocumentInfo({
                    id: '',
                    documentType: '',
                    employeeCode: '',
                    senderName: '',
                    email: '',
                    status: ''
                });
                break;
            case 'leaveRequest':
                setLeaveRequestInfo({
                    id: '',
                    employeeCode: '',
                    employeeName: '',
                    email: '',
                    position: '',
                    reason: '',
                    requestType: ''
                });
                break;
            case 'violation':
                setViolationInfo({
                    id: '',
                    employeeCode: '',
                    employeeName: '',
                    violationType: '',
                    severity: '',
                    status: ''
                });
                break;
            case 'timesheet':
                setTimesheetInfo({
                    id: '',
                    employeeCode: '',
                    date: '',
                    hoursWorked: '',
                    status: ''
                });
                break;
            case 'productDM':
                setProductDMInfo({
                    id: '',
                    productDMName: '',
                    productDMQuantity: '',
                    productDMUnit: '',
                });
                break;
            case 'qualityControl':
                setQualityControlInfo({
                    id:'',
                    inspector: '',
                    productRun: data.productionLine || '',
                    qualityResult: data.qualityResult || '',
                    resultDate: new Date().toISOString().split('T')[0],
                });
                break;
            case 'packaging':
                setPackagingInfo({
                    id:'',
                    packagingDate: new Date().toISOString().split('T')[0],
                    inspector:'',
                    productID: data.productID || '',
                    productRun: data.productRun || '',
                    quality:data.quality || '',
                });
                break;
            default:
                break;
        }
    };



    return (
        <>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && {display: 'none'}),
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            {selectedMenu}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </DrawerHeader>
                    <img src={CompanyLogo} alt="Company Logo" width="200" height="200" style={{marginTop: '-125px'}}/>
                    <Divider sx={{marginTop: '-65px'}}/>
                    <List>
                        {menuItems.map((menuItem) => (
                            <div key={menuItem.title}>
                                <ListItem key={menuItem.title} disablePadding sx={{display: 'block'}}>
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
                                        <ListItemText primary={menuItem.title} sx={{opacity: open ? 1 : 0}}/>
                                        {menuItem.submenus && (selectedMenu === menuItem.title ? (openSubmenu ?
                                            <ExpandLess/> : <ExpandMore/>) : null)}
                                    </ListItemButton>
                                    {menuItem.submenus && (
                                        <Collapse in={openSubmenu && selectedMenu === menuItem.title} timeout="auto"
                                                  unmountOnExit>
                                            <List component="div" disablePadding>
                                                {menuItem.submenus.map((submenu) => (
                                                    <ListItemButton key={submenu.title}
                                                                    onClick={() => handleSubmenuClick(submenu)}
                                                                    sx={{pl: 4}}>
                                                        <ListItemText primary={submenu.title}/>
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        </Collapse>
                                    )}
                                </ListItem>
                            </div>
                        ))}
                    </List>

                    <Divider/>
                </Drawer>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <DrawerHeader/>
                    <TextField
                        label="Tìm kiếm"
                        variant="outlined"
                        value={searchKeyword}
                        onChange={handleSearch}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon/>
                                </InputAdornment>
                            ),
                        }}
                        sx={{marginBottom: 2}}
                    />
                    {selectedMenu === 'Quản lý nhân sự' && (
                        <>
                            <Button variant="contained" onClick={() => handleDialogOpen('employee')}
                                    sx={{marginLeft: 2, marginBottom: 2}}>Thêm nhân viên</Button>
                            <EmployeeTable employees={filteredEmployees}
                                           handleEdit={(item) => handleEdit('employee', item)}
                                           handleDelete={(id) => handleDelete('employee', id)}/>
                        </>
                    )}
                    {selectedMenu === 'Duyệt chứng từ' && (
                        <>
                            <Button variant="contained" onClick={() => handleDialogOpen('document')}
                                    sx={{marginLeft: 2, marginBottom: 2}}>Thêm chứng từ</Button>
                            <DocumentTable documents={filteredDocuments}
                                           handleEdit={(item) => handleEdit('document', item)}
                                           handleDelete={(id) => handleDelete('document', id)}/>
                        </>
                    )}
                    {selectedMenu === 'Đơn nghỉ' && (
                        <>
                            <Button variant="contained" onClick={() => handleDialogOpen('leaveRequest')}
                                    sx={{marginLeft: 2, marginBottom: 2}}>Thêm đơn nghỉ</Button>
                            <LeaveRequestTable leaveRequests={filteredLeaveRequests}
                                               handleEdit={(item) => handleEdit('leaveRequest', item)}
                                               handleDelete={(id) => handleDelete('leaveRequest', id)}/>
                        </>
                    )}
                    {selectedMenu === 'Vi phạm' && (
                        <>
                            <Button variant="contained" onClick={() => handleDialogOpen('violation')}
                                    sx={{marginLeft: 2, marginBottom: 2}}>Thêm vi phạm</Button>
                            <ViolationTable violations={filteredViolations}
                                            handleEdit={(item) => handleEdit('violation', item)}
                                            handleDelete={(id) => handleDelete('violation', id)}/>
                        </>
                    )}
                    {selectedMenu === 'Bảng chấm công' && (
                        <>
                            <Button variant="contained" onClick={() => handleDialogOpen('timesheet')}
                                    sx={{marginLeft: 2, marginBottom: 2}}>Thêm chấm công</Button>
                            <TimesheetTable timesheets={filteredTimesheets}
                                            handleEdit={(item) => handleEdit('timesheet', item)}
                                            handleDelete={(id) => handleDelete('timesheet', id)}/>
                        </>
                    )}
                    {/* Quản lý định mức sản xuất , Buoc 6 */}
                    {selectedMenu === 'Quản lý định mức' && (
                        <>
                            <Button variant="contained" onClick={() => handleDialogOpen('productDM')}
                                    sx={{marginLeft: 2, marginBottom: 2}}>Thêm nguyên liệu</Button>
                            <Button variant="contained" sx={{marginLeft: 2, marginBottom: 2}} onClick={exportProductDM}>Xuất
                                File</Button>
                            <ProductDM productDMs={filteredProductDMs}
                                       handleEdit={(item) => handleEdit('productDM', item)}
                                       handleDelete={(id) => handleDelete('productDM', id)}/>
                        </>
                    )}
                    {selectedMenu === 'Quản lý công đoạn' && (
                        <>

                            <WorkOrder workOrders={filteredWorkOrders}
                                       handleDialogOpen={handleDialogOpen} />
                        </>
                    )}
                    {selectedMenu === 'Quản lý chất lượng' && (
                        <>
                            <QualityControl qualityControls={filteredQualityControls}
                                            handleDelete={(id) => handleDelete('qualityControl', id)}
                                            handleDialogOpen={handleDialogOpen}
                                            setDialogType={setDialogType}
                                            setQualityControlInfo={setQualityControlInfo}
                                            handleConfirmEdit={handleConfirmEdit}
                            />
                        </>
                    )}
                    {selectedMenu === 'Quản lý đóng gói' && (
                        <>
                            <Button variant="contained" sx={{marginLeft: 2, marginBottom: 2}} onClick={exportPackaging}>Xuất
                                File</Button>
                            <Packaging packagings={filteredPackagings}/>
                        </>
                    )}
                    {selectedMenu === 'Quản lý khấu hao' && (
                        <>
                            <Button variant="contained" sx={{marginLeft: 2, marginBottom: 2}}
                                    onClick={exportDepreciation}>Xuất File</Button>
                            <Depreciation depreciations={filteredDepreciations}
                                          setDialogType={setDialogType}
                                          setDepreciationInfo={setDepreciationInfo}
                                          handleConfirmEdit={handleConfirmEdit}/>
                        </>
                    )}
                </Box>
            </Box>
            <div>
                <DialogComponent
                    editMode={editMode}
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
                    snackbarOpen={snackbarOpen}
                    snackbarMessage={snackbarMessage}
                    handleCloseSnackbar={handleCloseSnackbar}
                    handleInputChange={handleInputChange}
                    handleConfirmAdd={handleConfirmAdd}
                    handleConfirmEdit={handleConfirmEdit}
                />

            </div>
        </>
    );
}
