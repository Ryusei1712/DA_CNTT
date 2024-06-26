package com.seafood.management.production_management.controller;



import com.seafood.management.production_management.model.BillOfMaterials;
import com.seafood.management.production_management.service.BOMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/production/boms")
public class BOMController {

    @Autowired
    private BOMService bomService;

    @GetMapping
    public ResponseEntity<List<BillOfMaterials>> getAllBOMs() {
        return ResponseEntity.ok(bomService.findAllBillOfMaterials());
    }

    @PostMapping
    public ResponseEntity<BillOfMaterials> createBOM(@RequestBody BillOfMaterials bom) {
        return ResponseEntity.ok(bomService.saveBillOfMaterials(bom));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BillOfMaterials> updateBOM(@PathVariable Long id, @RequestBody BillOfMaterials bom) {
        return ResponseEntity.ok(bomService.updateBillOfMaterials(id, bom));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBOM(@PathVariable Long id) {
        bomService.deleteBillOfMaterials(id);
        return ResponseEntity.noContent().build();
    }
}
