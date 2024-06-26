package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.dto.EmployeeDTO;
import com.seafood.management.da_cntt.dto.TimeSheetDTO;
import com.seafood.management.da_cntt.model.Employee;
import com.seafood.management.da_cntt.model.LeaveRequest;
import com.seafood.management.da_cntt.model.Timesheet;
import com.seafood.management.da_cntt.repository.TimesheetRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TimesheetService {
    @Autowired
    private TimesheetRepository timesheetRepository;
    public TimeSheetDTO convertToDTO(Timesheet timeSheet) {
        return new TimeSheetDTO(timeSheet.getId(), timeSheet.getEmployee().getEmployeeCode(), timeSheet.getDate().toString(),
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
            Timesheet timesheet = timesheetOptional.get();
            backupTimesheetInfo(timesheet);
            timesheetRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional
    public boolean deleteTimesheetByEmployeeCode(String employeeCode) {
        List<Timesheet> timesheets = timesheetRepository.findByEmployee_EmployeeCode(employeeCode);
        if (!timesheets.isEmpty()) {

            timesheetRepository.deleteByEmployeeCode(employeeCode);
            return true;
        }
        return false;
    }

    private void backupTimesheetInfo(Timesheet timesheet) {
        String timesheetInfo = timesheet.toString();
        String backupDirectoryPath = "backup/timesheet"; // Specify your backup directory here
        String backupFilePath = backupDirectoryPath + "/" + timesheet.getDate() + "_" + timesheet.getEmployee().getEmployeeName() + ".txt";

        // Create the backup directory if it doesn't exist
        File backupDirectory = new File(backupDirectoryPath);
        if (!backupDirectory.exists()) {
            backupDirectory.mkdirs();
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(backupFilePath))) {
            writer.write(timesheetInfo);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
