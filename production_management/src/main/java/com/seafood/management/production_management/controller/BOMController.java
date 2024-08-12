package com.seafood.management.production_management.controller;

import com.seafood.management.production_management.dto.BOMDTO;
import com.seafood.management.production_management.model.BillOfMaterials;
import com.seafood.management.production_management.service.BOMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/production/boms")
public class BOMController {

    @Autowired
    private BOMService bomService;

    @GetMapping
    public ResponseEntity<List<BOMDTO>> getAllBOMs() {
        return ResponseEntity.ok(bomService.findAllBillOfMaterials());
    }

    @PostMapping
    public ResponseEntity<BillOfMaterials> createBOM(@RequestBody BOMDTO bomdto) {
        return ResponseEntity.ok(bomService.saveBillOfMaterials(bomdto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Optional<BillOfMaterials>> updateBOM(@PathVariable Long id, @RequestBody BOMDTO bom) {
        return ResponseEntity.ok(bomService.updateBillOfMaterials(id, bom));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBOM(@PathVariable Long id) {
        boolean deleted = bomService.deleteBillOfMaterials(id);
        return deleted ? new ResponseEntity<>("Bill of materials has been deleted successfully", HttpStatus.OK)
                : new ResponseEntity<>("Bill of materials  not found", HttpStatus.NOT_FOUND);
    }
}
