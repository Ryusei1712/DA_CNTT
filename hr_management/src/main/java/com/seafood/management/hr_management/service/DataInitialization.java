package com.seafood.management.hr_management.service;

import com.seafood.management.hr_management.dto.*;
import com.seafood.management.hr_management.model.Employee;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Random;

@Component
public class DataInitialization {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private DocumentService documentService;

    @Autowired
    private LeaveRequestService leaveRequestService;

    @Autowired
    private ViolationListService violationListService;

    @Autowired
    private TimesheetService timesheetService;

    @PostConstruct
    public void initializeData() {
        // Thêm mẫu dữ liệu cho Employee
        Employee emp1 = new Employee("NV001", "Nguyễn Văn A", "nguyenvana@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp2 = new Employee("NV002", "Trần Thị B", "tranthib@gmail.com", "Nhân viên", "Nhân viên đã nghỉ");
        Employee emp3 = new Employee("NV003", "Lê Văn C", "levanc@gmail.com", "Nhân viên", "Nghỉ theo chế độ");
        Employee emp4 = new Employee("NV004", "Phạm Thị D", "phamthid@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp5 = new Employee("NV005", "Hoàng Văn E", "hoangvane@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp6 = new Employee("NV006", "Vũ Thị F", "vuthif@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp7 = new Employee("NV007", "Đặng Văn G", "dangvang@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp8 = new Employee("NV008", "Bùi Thị H", "buithih@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp9 = new Employee("NV009", "Ngô Văn I", "ngovanf@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp10 = new Employee("NV010", "Lý Thị K", "lythik@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp11 = new Employee("NV011", "Trương Văn L", "truongvanl@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp12 = new Employee("NV012", "Hoàng Thị M", "hoangthim@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp13 = new Employee("NV013", "Đinh Văn N", "dinhvann@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp14 = new Employee("NV014", "Lê Thị P", "lethip@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp15 = new Employee("NV015", "Võ Văn Q", "vovanq@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp16 = new Employee("NV016", "Trần Thị R", "tranthir@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp17 = new Employee("NV017", "Hoàng Văn S", "hoangvans@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp18 = new Employee("NV018", "Nguyễn Thị T", "nguyenthit@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp19 = new Employee("NV019", "Lê Văn U", "levanu@gmail.com", "Nhân viên", "Nhân viên mới");
        Employee emp20 = new Employee("NV020", "Trần Thị V", "tranthiv@gmail.com", "Nhân viên", "Nhân viên mới");

        employeeService.saveEmployee(emp1);
        employeeService.saveEmployee(emp2);
        employeeService.saveEmployee(emp3);
        employeeService.saveEmployee(emp4);
        employeeService.saveEmployee(emp5);
        employeeService.saveEmployee(emp6);
        employeeService.saveEmployee(emp7);
        employeeService.saveEmployee(emp8);
        employeeService.saveEmployee(emp9);
        employeeService.saveEmployee(emp10);
        employeeService.saveEmployee(emp11);
        employeeService.saveEmployee(emp12);
        employeeService.saveEmployee(emp13);
        employeeService.saveEmployee(emp14);
        employeeService.saveEmployee(emp15);
        employeeService.saveEmployee(emp16);
        employeeService.saveEmployee(emp17);
        employeeService.saveEmployee(emp18);
        employeeService.saveEmployee(emp19);
        employeeService.saveEmployee(emp20);

        // Thêm mẫu dữ liệu cho Document
        documentService.saveDocument(new DocumentDTO(null, "NV001", "Đơn nghỉ phép", "Nguyễn Văn A", "nguyenvana@gmail.com", "Mới"));
        documentService.saveDocument(new DocumentDTO(null, "NV002", "Đơn nghỉ việc", "Trần Thị B", "tranthib@gmail.com", "Đã duyệt"));
        documentService.saveDocument(new DocumentDTO(null, "NV003", "Đơn nghỉ chế độ", "Lê Văn C", "levanc@gmail.com", "Từ chối"));
        documentService.saveDocument(new DocumentDTO(null, "NV004", "Đơn nghỉ chế độ", "Phạm Thị D", "phamthid@gmail.com", "Mới"));
        documentService.saveDocument(new DocumentDTO(null, "NV005", "Đơn nghỉ phép", "Hoàng Văn E", "hoangvane@gmail.com", "Đã duyệt"));
        documentService.saveDocument(new DocumentDTO(null, "NV006", "Đơn nghỉ việc", "Vũ Thị F", "vuthif@gmail.com", "Từ chối"));
        documentService.saveDocument(new DocumentDTO(null, "NV007", "Đơn nghỉ chế độ", "Đặng Văn G", "dangvang@gmail.com", "Mới"));
        documentService.saveDocument(new DocumentDTO(null, "NV008", "Đơn nghỉ phép", "Bùi Thị H", "buithih@gmail.com", "Đã duyệt"));
        documentService.saveDocument(new DocumentDTO(null, "NV009", "Đơn nghỉ việc", "Ngô Văn I", "ngovanf@gmail.com", "Từ chối"));
        documentService.saveDocument(new DocumentDTO(null, "NV010", "Đơn nghỉ chế độ", "Lý Thị K", "lythik@gmail.com", "Mới"));

        // Thêm mẫu dữ liệu cho LeaveRequest
        leaveRequestService.saveLeaveRequest(new LeaveRequestDTO(null, "NV001", "Nguyễn Văn A", "nguyenvana@gmail.com", "Nhân viên", "Nghỉ ốm", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequestDTO(null, "NV002", "Trần Thị B", "tranthib@gmail.com", "Nhân viên", "Nghỉ sinh", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequestDTO(null, "NV003", "Lê Văn C", "levanc@gmail.com", "Nhân viên", "Nghỉ kết hôn", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequestDTO(null, "NV004", "Phạm Thị D", "phamthid@gmail.com", "Nhân viên", "Nghỉ chăm sóc con", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequestDTO(null, "NV005", "Hoàng Văn E", "hoangvane@gmail.com", "Nhân viên", "Nghỉ học tập", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequestDTO(null, "NV006", "Vũ Thị F", "vuthif@gmail.com", "Nhân viên", "Nghỉ du lịch", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequestDTO(null, "NV007", "Đặng Văn G", "dangvang@gmail.com", "Nhân viên", "Nghỉ khám bệnh", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequestDTO(null, "NV008", "Bùi Thị H", "buithih@gmail.com", "Nhân viên", "Nghỉ giải quyết việc gia đình", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequestDTO(null, "NV009", "Ngô Văn I", "ngovanf@gmail.com", "Nhân viên", "Nghỉ tham gia hoạt động xã hội", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequestDTO(null, "NV010", "Lý Thị K", "lythik@gmail.com", "Nhân viên", "Nghỉ bảo trì thiết bị", "Đơn nghỉ phép"));

        // Thêm mẫu dữ liệu cho ViolationList
        violationListService.saveViolationList(new ViolationListDTO(null, "NV001", "Nguyễn Văn A", "Đi trễ", 1, "Nhắc nhở"));
        violationListService.saveViolationList(new ViolationListDTO(null, "NV002", "Trần Thị B", "Nghỉ không phép", 2, "Cảnh cáo"));
        violationListService.saveViolationList(new ViolationListDTO(null, "NV003", "Lê Văn C", "Nghỉ không phép", 2, "Cảnh cáo"));
        violationListService.saveViolationList(new ViolationListDTO(null, "NV004", "Phạm Thị D", "Phá hoại tài sản", 1, "Nhắc nhở"));
        violationListService.saveViolationList(new ViolationListDTO(null, "NV005", "Hoàng Văn E", "Gây rối", 2, "Cảnh cáo"));
        violationListService.saveViolationList(new ViolationListDTO(null, "NV006", "Vũ Thị F", "Đi trễ", 3, "Sa thải"));
        violationListService.saveViolationList(new ViolationListDTO(null, "NV007", "Đặng Văn G", "Nghỉ không phép", 1, "Nhắc nhở"));
        violationListService.saveViolationList(new ViolationListDTO(null, "NV008", "Bùi Thị H", "Trộm cắp", 2, "Cảnh cáo"));
        violationListService.saveViolationList(new ViolationListDTO(null, "NV009", "Ngô Văn I", "Phá hoại tài sản", 3, "Sa thải"));
        violationListService.saveViolationList(new ViolationListDTO(null, "NV010", "Lý Thị K", "Gây rối", 1, "Nhắc nhở"));

        // Thêm mẫu dữ liệu cho Timesheet
        Random random = new Random();
        LocalDate startDate = LocalDate.now().minusDays(30);

        for (int i = 1; i <= 20; i++) {// số lượng nhân viên
            for (int j = 0; j < 1; j++) {// ngày trong tháng
                LocalDate randomDate = startDate.plusDays(j);
                int hoursWorked = random.nextInt(8) + 1;
                String status = random.nextBoolean() ? "Đã chấm công" : "Chưa chấm công";
                EmployeeDTO employee = employeeService.findEmployeeByCode(i < 10 ? "NV00" + i : "NV0" + i);
                timesheetService.saveTimesheet(new TimeSheetDTO(null, employee.getEmployeeCode(), randomDate.toString(), hoursWorked, status));
            }
        }
    }
}
