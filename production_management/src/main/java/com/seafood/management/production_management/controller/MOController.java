package com.seafood.management.production_management.controller;

import com.seafood.management.production_management.model.ManufacturingOrder;
import com.seafood.management.production_management.service.MOService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/production/manufacturing-orders")
public class MOController {

    @Autowired
    private MOService moService;

    @GetMapping
    public ResponseEntity<List<ManufacturingOrder>> getAllMOs() {
        return ResponseEntity.ok(moService.findAllMO());
    }

    @PostMapping
    public ResponseEntity<ManufacturingOrder> createMO(@RequestBody ManufacturingOrder mo) {
        return ResponseEntity.ok(moService.saveMO(mo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ManufacturingOrder> updateMO(@PathVariable Long id, @RequestBody ManufacturingOrder mo) {
        return ResponseEntity.ok(moService.updateMO(id, mo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMO(@PathVariable Long id) {
        moService.deleteMO(id);
        return ResponseEntity.noContent().build();
    }
}
