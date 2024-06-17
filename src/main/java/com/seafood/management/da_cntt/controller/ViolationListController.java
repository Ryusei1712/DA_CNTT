package com.seafood.management.da_cntt.controller;

import com.seafood.management.da_cntt.model.ViolationList;
import com.seafood.management.da_cntt.service.ViolationListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/violationLists")
public class ViolationListController {

    @Autowired
    private ViolationListService violationListService;

    @GetMapping
    public ResponseEntity<List<ViolationList>> getAllViolationLists() {
        List<ViolationList> violationLists = violationListService.getAllViolationLists();
        return new ResponseEntity<>(violationLists, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ViolationList> getViolationListById(@PathVariable Long id) {
        Optional<ViolationList> violationList = violationListService.getViolationListById(id);
        return violationList.map(list -> new ResponseEntity<>(list, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<ViolationList> addViolationList(@RequestBody ViolationList violationList) {
        ViolationList savedViolationList = violationListService.saveViolationList(violationList);
        return new ResponseEntity<>(savedViolationList, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ViolationList> updateViolationList(@PathVariable Long id, @RequestBody ViolationList violationList) {
        Optional<ViolationList> updatedViolationList = violationListService.updateViolationList(id, violationList);
        return updatedViolationList.map(list -> new ResponseEntity<>(list, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteViolationList(@PathVariable Long id) {
        boolean deleted = violationListService.deleteViolationList(id);
        return deleted ? new ResponseEntity<>("Violation list has been deleted successfully", HttpStatus.OK)
                : new ResponseEntity<>("Violation list not found", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/countBySeverity/{severity}")
    public ResponseEntity<Integer> countViolationListsBySeverity(@PathVariable int severity) {
        int count = violationListService.countViolationListsBySeverity(severity);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

    @GetMapping("/countByStatus/{status}")
    public ResponseEntity<Integer> countViolationListsByStatus(@PathVariable String status) {
        int count = violationListService.countViolationListsByStatus(status);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
}
