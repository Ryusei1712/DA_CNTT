package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.model.Employee;
import com.seafood.management.da_cntt.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public Optional<Employee> getEmployeeByEmployeeCode(String employeeCode) {
        return employeeRepository.findByEmployeeCode(employeeCode);
    }

    public Optional<Employee> getEmployeeByEmail(String email) {
        return employeeRepository.findByEmail(email);
    }
    @Transactional
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
    @Transactional
    public Optional<Employee> updateEmployee(Long id, Employee employee) {
        Optional<Employee> existingEmployeeOptional = employeeRepository.findById(id);
        if (existingEmployeeOptional.isPresent()) {
            Employee existingEmployee = existingEmployeeOptional.get();
            existingEmployee.setEmail(employee.getEmail());
            existingEmployee.setEmployeeCode(employee.getEmployeeCode());
            existingEmployee.setEmployeeName(employee.getEmployeeName());
            existingEmployee.setPosition(employee.getPosition());
            existingEmployee.setStatus(employee.getStatus());
            return Optional.of(employeeRepository.save(existingEmployee));
        } else {
            return Optional.empty();
        }
    }
    @Transactional
    public boolean deleteEmployee(Long id) {
        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        if (employeeOptional.isPresent()) {
            employeeRepository.deleteById(id);
            return true;
        }
        return false;
    }
    @Transactional
    public boolean deleteEmployeeByCode(String employeeCode) {
        Optional<Employee> employeeOptional = employeeRepository.findByEmployeeCode(employeeCode);
        if (employeeOptional.isPresent()) {
            employeeRepository.deleteByEmployeeCode(employeeCode);
            return true;
        }
        return false;
    }

    public int countEmployeesByStatus(String status) {
        return employeeRepository.countByStatus(status);
    }

}
