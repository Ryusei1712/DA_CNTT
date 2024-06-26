package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.dto.EmployeeDTO;
import com.seafood.management.da_cntt.model.Employee;
import com.seafood.management.da_cntt.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
    public EmployeeDTO convertToDTO(Employee employee) {
        return new EmployeeDTO(employee.getId(), employee.getEmployeeCode(), employee.getEmployeeName(),
                employee.getEmail(), employee.getPosition(), employee.getStatus());
    }
    public Employee convertToEntity(EmployeeDTO employeeDTO) {
        if (employeeDTO == null) {
            return null;
        }
        Employee employee = new Employee();
        employee.setId(employeeDTO.getId());
        employee.setEmployeeCode(employeeDTO.getEmployeeCode());
        employee.setEmployeeName(employeeDTO.getEmployeeName());
        employee.setEmail(employeeDTO.getEmail());
        employee.setPosition(employeeDTO.getPosition());
        employee.setStatus(employeeDTO.getStatus());
        return employee;
    }

    public EmployeeDTO findEmployeeByCode(String employeeCode) {
        Optional<Employee> optionalEmployee = employeeRepository.findByEmployeeCode(employeeCode);
        return optionalEmployee.map(this::convertToDTO).orElse(null);
    }

    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public Optional<EmployeeDTO> getEmployeeById(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        return employee.map(this::convertToDTO);
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
            Employee employee = employeeOptional.get();
            backupEmployeeInfo(employee);
            employeeRepository.deleteByEmployeeCode(employeeCode);
            return true;
        }
        return false;
    }

    public int countEmployeesByStatus(String status) {
        return employeeRepository.countByStatus(status);
    }

    private void backupEmployeeInfo(Employee employee) {
        String employeeInfo = employee.toString();
        String backupDirectoryPath = "backup/employee"; // Specify your backup directory here
        String backupFilePath = backupDirectoryPath + "/" + employee.getEmployeeCode() + ".txt";

        // Create the backup directory if it doesn't exist
        File backupDirectory = new File(backupDirectoryPath);
        if (!backupDirectory.exists()) {
            backupDirectory.mkdirs();
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(backupFilePath))) {
            writer.write(employeeInfo);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
