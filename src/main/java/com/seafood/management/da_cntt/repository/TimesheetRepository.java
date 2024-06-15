package com.seafood.management.da_cntt.repository;

import com.seafood.management.da_cntt.model.Timesheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TimesheetRepository extends JpaRepository<Timesheet, Long> {

    List<Timesheet> findByEmployeeId(String employeeId);

    List<Timesheet> findByDateBetween(LocalDate startDate, LocalDate endDate);
}
