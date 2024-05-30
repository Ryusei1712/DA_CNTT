package com.seafood.management.da_cntt.controller;

import com.seafood.management.da_cntt.model.Employee;
import com.seafood.management.da_cntt.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Optional<Employee> employee = employeeService.getEmployeeById(id);
        if (employee.isPresent()) {
            return new ResponseEntity<>(employee.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
        Employee savedEmployee = employeeService.saveEmployee(employee);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        Optional<Employee> updatedEmployee = employeeService.updateEmployee(id, employee);
        if (updatedEmployee.isPresent()) {
            return new ResponseEntity<>(updatedEmployee.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        boolean deleted = employeeService.deleteEmployee(id);
        if (deleted) {
            return new ResponseEntity<>("Employee has been deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Employee not found", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/countNewEmployees")
    public ResponseEntity<Integer> countNewEmployees() {
        int count = employeeService.countEmployeesByStatus("Nhân viên mới");
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
    @GetMapping("/countFiredEmployees")
    public ResponseEntity<Integer> countFiredEmployees() {
        int count = employeeService.countEmployeesByStatus("Nhân viên đã nghỉ");
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
    @GetMapping("/countLeaveByPolicyEmployees")
    public ResponseEntity<Integer> countLeaveByPolicyEmployees() {
        int count = employeeService.countEmployeesByStatus("Nghỉ theo chế độ");
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

}
