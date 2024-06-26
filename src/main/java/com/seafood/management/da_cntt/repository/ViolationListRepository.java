package com.seafood.management.da_cntt.repository;

import com.seafood.management.da_cntt.model.Timesheet;
import com.seafood.management.da_cntt.model.ViolationList;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ViolationListRepository extends JpaRepository<ViolationList, Long> {
    int countBySeverity(int severity);

    int countByStatus(String status);

    List<ViolationList> findByEmployee_EmployeeCode(String employeeCode);

    @Modifying
    @Transactional
    @Query("DELETE FROM ViolationList v WHERE v.employee.employeeCode = :employeeCode")
    void deleteByEmployeeCode(String employeeCode);
}
