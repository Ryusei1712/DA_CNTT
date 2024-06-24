package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.dto.EmployeeDTO;
import com.seafood.management.da_cntt.dto.TimeSheetDTO;
import com.seafood.management.da_cntt.model.Employee;
import com.seafood.management.da_cntt.model.Timesheet;
import com.seafood.management.da_cntt.repository.TimesheetRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TimesheetService {
    @Autowired
    private TimesheetRepository timesheetRepository;
    public TimeSheetDTO convertToDTO(Timesheet timeSheet) {
        return new TimeSheetDTO(timeSheet.getEmployee().getEmployeeCode(), timeSheet.getDate().toString(),
                timeSheet.getHoursWorked(), timeSheet.getStatus());
    }
    public List<TimeSheetDTO> getAllTimesheets() {
        List<Timesheet> timeSheet = timesheetRepository.findAll();
        return timeSheet.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public Optional<TimeSheetDTO> getTimesheetById(Long id) {
        Optional<Timesheet> timeSheet = timesheetRepository.findById(id);
        return timeSheet.map(this::convertToDTO);
    }
    public List<Timesheet> getTimesheetsByEmployeeId(String employeeId) {
        return timesheetRepository.findByEmployee_EmployeeCode(employeeId);
    }

    public List<Timesheet> getTimesheetsByDateRange(LocalDate startDate, LocalDate endDate) {
        return timesheetRepository.findByDateBetween(startDate, endDate);
    }

    @Transactional
    public Timesheet saveTimesheet(Timesheet timesheet) {
        return timesheetRepository.save(timesheet);
    }

    @Transactional
    public Optional<Timesheet> updateTimesheet(Long id, Timesheet timesheet) {
        Optional<Timesheet> existingTimesheetOptional = timesheetRepository.findById(id);
        if (existingTimesheetOptional.isPresent()) {
            Timesheet existingTimesheet = existingTimesheetOptional.get();
            existingTimesheet.setEmployee(timesheet.getEmployee());
            existingTimesheet.setDate(timesheet.getDate());
            existingTimesheet.setHoursWorked(timesheet.getHoursWorked());
            existingTimesheet.setStatus(timesheet.getStatus());
            return Optional.of(timesheetRepository.save(existingTimesheet));
        } else {
            return Optional.empty();
        }
    }

    @Transactional
    public boolean deleteTimesheet(Long id) {
        Optional<Timesheet> timesheetOptional = timesheetRepository.findById(id);
        if (timesheetOptional.isPresent()) {
            timesheetRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
