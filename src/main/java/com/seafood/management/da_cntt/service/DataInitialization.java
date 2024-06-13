package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.model.Document;
import com.seafood.management.da_cntt.model.Employee;
import com.seafood.management.da_cntt.model.LeaveRequest;
import com.seafood.management.da_cntt.model.Timesheet;
import com.seafood.management.da_cntt.model.ViolationList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
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
        employeeService.saveEmployee(new Employee("NV001", "Nguyễn Văn A", "nguyenvana@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV002", "Trần Thị B", "tranthib@gmail.com", "Nhân viên", "Nhân viên đã nghỉ"));
        employeeService.saveEmployee(new Employee("NV003", "Lê Văn C", "levanc@gmail.com", "Nhân viên", "Nghỉ theo chế độ"));
        employeeService.saveEmployee(new Employee("NV004", "Phạm Thị D", "phamthid@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV005", "Hoàng Văn E", "hoangvane@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV006", "Vũ Thị F", "vuthif@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV007", "Đặng Văn G", "dangvang@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV008", "Bùi Thị H", "buithih@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV009", "Ngô Văn I", "ngovanf@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV010", "Lý Thị K", "lythik@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV011", "Trương Văn L", "truongvanl@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV012", "Hoàng Thị M", "hoangthim@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV013", "Đinh Văn N", "dinhvann@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV014", "Lê Thị P", "lethip@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV015", "Võ Văn Q", "vovanq@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV016", "Trần Thị R", "tranthir@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV017", "Hoàng Văn S", "hoangvans@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV018", "Nguyễn Thị T", "nguyenthit@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV019", "Lê Văn U", "levanu@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV020", "Trần Thị V", "tranthiv@gmail.com", "Nhân viên", "Nhân viên mới"));

        // Thêm mẫu dữ liệu cho Document
        documentService.saveDocument(new Document("Đơn nghỉ phép", "NV001", "Nguyễn Văn A", "nguyenvana@gmail.com", "Mới"));
        documentService.saveDocument(new Document("Đơn nghỉ việc", "NV002", "Trần Thị B", "tranthib@gmail.com", "Đã duyệt"));
        documentService.saveDocument(new Document("Đơn nghỉ chế độ", "NV003", "Lê Văn C", "levanc@gmail.com", "Từ chối"));
        documentService.saveDocument(new Document("Đơn nghỉ chế độ", "NV004", "Phạm Thị D", "phamthid@gmail.com", "Mới"));
        documentService.saveDocument(new Document("Đơn nghỉ phép", "NV005", "Hoàng Văn E", "hoangvane@gmail.com", "Đã duyệt"));
        documentService.saveDocument(new Document("Đơn nghỉ việc", "NV006", "Vũ Thị F", "vuthif@gmail.com", "Từ chối"));
        documentService.saveDocument(new Document("Đơn nghỉ chế độ", "NV007", "Đặng Văn G", "dangvang@gmail.com", "Mới"));
        documentService.saveDocument(new Document("Đơn nghỉ phép", "NV008", "Bùi Thị H", "buithih@gmail.com", "Đã duyệt"));
        documentService.saveDocument(new Document("Đơn nghỉ việc", "NV009", "Ngô Văn I", "ngovanf@gmail.com", "Từ chối"));
        documentService.saveDocument(new Document("Đơn nghỉ chế độ", "NV010", "Lý Thị K", "lythik@gmail.com", "Mới"));

        // Thêm mẫu dữ liệu cho LeaveRequest
        leaveRequestService.saveLeaveRequest(new LeaveRequest("NV001", "Nguyễn Văn A", "nguyenvana@gmail.com", "Nhân viên", "Nghỉ ốm", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequest("NV002", "Trần Thị B", "tranthib@gmail.com", "Nhân viên", "Nghỉ sinh", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequest("NV003", "Lê Văn C", "levanc@gmail.com", "Nhân viên", "Nghỉ kết hôn", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequest("NV004", "Phạm Thị D", "phamthid@gmail.com", "Nhân viên", "Nghỉ chăm sóc con", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequest("NV005", "Hoàng Văn E", "hoangvane@gmail.com", "Nhân viên", "Nghỉ học tập", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequest("NV006", "Vũ Thị F", "vuthif@gmail.com", "Nhân viên", "Nghỉ du lịch", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequest("NV007", "Đặng Văn G", "dangvang@gmail.com", "Nhân viên", "Nghỉ khám bệnh", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequest("NV008", "Bùi Thị H", "buithih@gmail.com", "Nhân viên", "Nghỉ giải quyết việc gia đình", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequest("NV009", "Ngô Văn I", "ngovanf@gmail.com", "Nhân viên", "Nghỉ tham gia hoạt động xã hội", "Đơn nghỉ phép"));
        leaveRequestService.saveLeaveRequest(new LeaveRequest("NV010", "Lý Thị K", "lythik@gmail.com", "Nhân viên", "Nghỉ bảo trì thiết bị", "Đơn nghỉ phép"));

        // Thêm mẫu dữ liệu cho ViolationList
        violationListService.saveViolationList(new ViolationList("NV001", "Nguyễn Văn A", "Đi trễ", 1, "Nhắc nhở"));
        violationListService.saveViolationList(new ViolationList("NV002", "Trần Thị B", "Nghỉ không phép", 2, "Cảnh cáo"));
        violationListService.saveViolationList(new ViolationList("NV003", "Lê Văn C", "Trộm cắp", 3, "Sa thải"));
        violationListService.saveViolationList(new ViolationList("NV004", "Phạm Thị D", "Phá hoại tài sản", 1, "Nhắc nhở"));
        violationListService.saveViolationList(new ViolationList("NV005", "Hoàng Văn E", "Gây rối", 2, "Cảnh cáo"));
        violationListService.saveViolationList(new ViolationList("NV006", "Vũ Thị F", "Đi trễ", 3, "Sa thải"));
        violationListService.saveViolationList(new ViolationList("NV007", "Đặng Văn G", "Nghỉ không phép", 1, "Nhắc nhở"));
        violationListService.saveViolationList(new ViolationList("NV008", "Bùi Thị H", "Trộm cắp", 2, "Cảnh cáo"));
        violationListService.saveViolationList(new ViolationList("NV009", "Ngô Văn I", "Phá hoại tài sản", 3, "Sa thải"));
        violationListService.saveViolationList(new ViolationList("NV010", "Lý Thị K", "Gây rối", 1, "Nhắc nhở"));

        // Thêm mẫu dữ liệu cho Timesheet
        Random random = new Random();
        LocalDate startDate = LocalDate.now().minusDays(30);
        LocalDate endDate = LocalDate.now();

        for (int i = 1; i <= 20; i++) {
            LocalDate randomDate = startDate.plusDays(random.nextInt(30));
            int hoursWorked = random.nextInt(8) + 1;
            String status = random.nextBoolean() ? "Đã chấm công" : "Chưa chấm công";
            timesheetService.saveTimesheet(new Timesheet(null, Long.valueOf(i), randomDate, hoursWorked, status));
        }
    }
}
