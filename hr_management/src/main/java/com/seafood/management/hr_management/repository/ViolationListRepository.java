package com.seafood.management.hr_management.repository;

import com.seafood.management.hr_management.model.ViolationList;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ViolationListRepository extends JpaRepository<ViolationList, Long> {
    int countBySeverity(int severity);

    int countByStatus(String status);

    List<ViolationList> findByEmployee_EmployeeCode(String employeeCode);

    @Modifying
    @Transactional
    @Query("DELETE FROM ViolationList v WHERE v.employee.employeeCode = :employeeCode")
    void deleteByEmployeeCode(String employeeCode);
}
