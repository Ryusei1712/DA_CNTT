package com.seafood.management.hr_management.controller;

import com.seafood.management.hr_management.dto.TimeSheetDTO;
import com.seafood.management.hr_management.model.Timesheet;
import com.seafood.management.hr_management.service.TimesheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/timesheets")
@CrossOrigin(origins = "*")
public class TimesheetController {

    @Autowired
    private TimesheetService timesheetService;

    @GetMapping
    public ResponseEntity<List<TimeSheetDTO>> getAllTimesheets() {
        List<TimeSheetDTO> timesheets = timesheetService.getAllTimesheets();
        return new ResponseEntity<>(timesheets, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TimeSheetDTO> getTimesheetById(@PathVariable Long id) {
        Optional<TimeSheetDTO> timesheet = timesheetService.getTimesheetById(id);
        return timesheet.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/dateRange")
    public ResponseEntity<List<Timesheet>> getTimesheetsByDateRange(@RequestParam LocalDate startDate, @RequestParam LocalDate endDate) {
        List<Timesheet> timesheets = timesheetService.getTimesheetsByDateRange(startDate, endDate);
        return new ResponseEntity<>(timesheets, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Timesheet> addTimesheet(@RequestBody TimeSheetDTO timesheet) {
        Timesheet savedTimesheet = timesheetService.saveTimesheet(timesheet);
        return new ResponseEntity<>(savedTimesheet, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Timesheet> updateTimesheet(@PathVariable Long id, @RequestBody TimeSheetDTO timesheet) {
        Optional<Timesheet> updatedTimesheet = timesheetService.updateTimesheet(id, timesheet);
        return updatedTimesheet.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTimesheet(@PathVariable Long id) {
        boolean deleted = timesheetService.deleteTimesheet(id);
        return deleted ? new ResponseEntity<>("Timesheet has been deleted successfully", HttpStatus.OK)
                : new ResponseEntity<>("Timesheet not found", HttpStatus.NOT_FOUND);
    }
}
