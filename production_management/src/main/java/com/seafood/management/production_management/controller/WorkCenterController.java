package com.seafood.management.production_management.controller;

import com.seafood.management.production_management.model.WorkCenter;
import com.seafood.management.production_management.service.WorkCenterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/production/work-centers")
public class WorkCenterController {

    @Autowired
    private WorkCenterService workCenterService;

    @GetMapping
    public ResponseEntity<List<WorkCenter>> getAllWorkCenters() {
        return ResponseEntity.ok(workCenterService.findAllWorkCenters());
    }

    @PostMapping
    public ResponseEntity<WorkCenter> createWorkCenter(@RequestBody WorkCenter workCenter) {
        return ResponseEntity.ok(workCenterService.saveWorkCenter(workCenter));
    }

    @PutMapping("/{id}")
    public ResponseEntity<WorkCenter> updateWorkCenter(@PathVariable Long id, @RequestBody WorkCenter workCenter) {
        return ResponseEntity.ok(workCenterService.updateWorkCenter(id, workCenter));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkCenter(@PathVariable Long id) {
        workCenterService.deleteWorkCenter(id);
        return ResponseEntity.noContent().build();
    }
}
