package com.seafood.management.da_cntt.controller;

import com.seafood.management.da_cntt.model.Timesheet;
import com.seafood.management.da_cntt.service.TimesheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/timesheets")
public class TimesheetController {

    @Autowired
    private TimesheetService timesheetService;

    @GetMapping
    public ResponseEntity<List<Timesheet>> getAllTimesheets() {
        List<Timesheet> timesheets = timesheetService.getAllTimesheets();
        return new ResponseEntity<>(timesheets, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Timesheet> getTimesheetById(@PathVariable Long id) {
        Optional<Timesheet> timesheet = timesheetService.getTimesheetById(id);
        if (timesheet.isPresent()) {
            return new ResponseEntity<>(timesheet.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List<Timesheet>> getTimesheetsByEmployeeId(@PathVariable String employeeId) {
        List<Timesheet> timesheets = timesheetService.getTimesheetsByEmployeeId(employeeId);
        return new ResponseEntity<>(timesheets, HttpStatus.OK);
    }

    @GetMapping("/dateRange")
    public ResponseEntity<List<Timesheet>> getTimesheetsByDateRange(@RequestParam LocalDate startDate, @RequestParam LocalDate endDate) {
        List<Timesheet> timesheets = timesheetService.getTimesheetsByDateRange(startDate, endDate);
        return new ResponseEntity<>(timesheets, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Timesheet> addTimesheet(@RequestBody Timesheet timesheet) {
        Timesheet savedTimesheet = timesheetService.saveTimesheet(timesheet);
        return new ResponseEntity<>(savedTimesheet, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Timesheet> updateTimesheet(@PathVariable Long id, @RequestBody Timesheet timesheet) {
        Optional<Timesheet> updatedTimesheet = timesheetService.updateTimesheet(id, timesheet);
        if (updatedTimesheet.isPresent()) {
            return new ResponseEntity<>(updatedTimesheet.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTimesheet(@PathVariable Long id) {
        boolean deleted = timesheetService.deleteTimesheet(id);
        if (deleted) {
            return new ResponseEntity<>("Timesheet has been deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Timesheet not found", HttpStatus.NOT_FOUND);
        }
    }
}
