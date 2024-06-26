package com.seafood.management.da_cntt.repository;

import com.seafood.management.da_cntt.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<Employee> findByEmployeeCode(String employeeCode);

    Optional<Employee> findByEmail(String email);
    int countByStatus(String status);

    void deleteByEmployeeCode(String employeeCode);
}