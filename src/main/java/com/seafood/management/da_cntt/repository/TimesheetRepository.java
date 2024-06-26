package com.seafood.management.da_cntt.repository;

import com.seafood.management.da_cntt.model.Timesheet;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TimesheetRepository extends JpaRepository<Timesheet, Long> {
    List<Timesheet> findByEmployee_EmployeeCode(String employeeCode);
    List<Timesheet> findByDateBetween(LocalDate startDate, LocalDate endDate);
    @Modifying
    @Transactional
    @Query("DELETE FROM Timesheet t WHERE t.employee.employeeCode = :employeeCode")
    void deleteByEmployeeCode(String employeeCode);
}
