package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.model.Employee;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;



@Component
public class DataInitialization {

    @Autowired
    private EmployeeService employeeService;

    @PostConstruct
    public void initializeData() {
        // Thêm mẫu dữ liệu cho Employee
        employeeService.saveEmployee(new Employee("NV001", "Nguyễn Văn A", "nguyenvana@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV002", "Trần Thị B", "tranthib@gmail.com", "Nhân viên", "Nhân viên mới"));
        employeeService.saveEmployee(new Employee("NV003", "Lê Văn C", "levanc@gmail.com", "Nhân viên", "Nhân viên mới"));
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
    }
}
