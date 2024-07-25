package com.seafood.management.hr_management.service;

import com.seafood.management.hr_management.dto.TimeSheetDTO;
import com.seafood.management.hr_management.model.Employee;
import com.seafood.management.hr_management.model.Timesheet;
import com.seafood.management.hr_management.repository.EmployeeRepository;
import com.seafood.management.hr_management.repository.TimesheetRepository;
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

    @Autowired
    private EmployeeRepository employeeRepository;

    public TimeSheetDTO convertToDTO(Timesheet timesheet) {
        return new TimeSheetDTO(timesheet.getId(), timesheet.getEmployee().getEmployeeCode(), timesheet.getDate().toString(),
                timesheet.getHoursWorked(), timesheet.getStatus());
    }

    public Timesheet convertToEntity(TimeSheetDTO timesheetDTO) {
        Employee employee = employeeRepository.findByEmployeeCode(timesheetDTO.getEmployeeCode())
                .orElseThrow(() -> new IllegalArgumentException("Employee not found for code: " + timesheetDTO.getEmployeeCode()));

        Timesheet timesheet = new Timesheet();
        timesheet.setEmployee(employee);
        timesheet.setDate(LocalDate.parse(timesheetDTO.getDate()));
        timesheet.setHoursWorked(timesheetDTO.getHoursWorked());
        timesheet.setStatus(timesheetDTO.getStatus());
        return timesheet;
    }

    public List<TimeSheetDTO> getAllTimesheets() {
        List<Timesheet> timesheets = timesheetRepository.findAll();
        return timesheets.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public Optional<TimeSheetDTO> getTimesheetById(Long id) {
        Optional<Timesheet> timesheet = timesheetRepository.findById(id);
        return timesheet.map(this::convertToDTO);
    }

    public List<Timesheet> getTimesheetsByDateRange(LocalDate startDate, LocalDate endDate) {
        return timesheetRepository.findByDateBetween(startDate, endDate);
    }

    @Transactional
    public Timesheet saveTimesheet(TimeSheetDTO timesheetDTO) {
        Timesheet timesheet = convertToEntity(timesheetDTO);
        return timesheetRepository.save(timesheet);
    }

    @Transactional
    public Optional<Timesheet> updateTimesheet(Long id, TimeSheetDTO timesheetDTO) {
        Optional<Timesheet> existingTimesheetOptional = timesheetRepository.findById(id);
        if (existingTimesheetOptional.isPresent()) {
            Timesheet existingTimesheet = existingTimesheetOptional.get();
            existingTimesheet.setDate(LocalDate.parse(timesheetDTO.getDate()));
            existingTimesheet.setHoursWorked(timesheetDTO.getHoursWorked());
            existingTimesheet.setStatus(timesheetDTO.getStatus());
            backupTimesheetInfo("backup/edit/timesheet", existingTimesheet);
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
            backupTimesheetInfo("backup/delete/timesheet", timesheet);
            timesheetRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional
    public boolean deleteTimesheetByEmployeeCode(String employeeCode) {
        List<Timesheet> timesheets = timesheetRepository.findByEmployee_EmployeeCode(employeeCode);
        if (!timesheets.isEmpty()) {
            for (Timesheet timesheet : timesheets) {
                backupTimesheetInfo("backup/delete/timesheet", timesheet);
            }
            timesheetRepository.deleteByEmployeeCode(employeeCode);
            return true;
        }
        return false;
    }

    private void backupTimesheetInfo(String path, Timesheet timesheet) {
        String timesheetInfo = timesheet.toString();
        String backupDirectoryPath = path;
        String backupFilePath = backupDirectoryPath + "/" + timesheet.getDate() + "_" + timesheet.getEmployee().getEmployeeName() + ".txt";

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
