package com.seafood.management.production_management.controller;

import com.seafood.management.production_management.model.QualityControl;
import com.seafood.management.production_management.service.QualityControlService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/production/quality-controls")
public class QualityControlController {

    @Autowired
    private QualityControlService qualityControlService;

    @GetMapping
    public ResponseEntity<List<QualityControl>> getAllQualityControls() {
        return ResponseEntity.ok(qualityControlService.findAllQualityControls());
    }

    @PostMapping
    public ResponseEntity<QualityControl> createQualityControl(@RequestBody QualityControl qualityControl) {
        return ResponseEntity.ok(qualityControlService.saveQualityControl(qualityControl));
    }

    @PutMapping("/{id}")
    public ResponseEntity<QualityControl> updateQualityControl(@PathVariable Long id, @RequestBody QualityControl qualityControl) {
        return ResponseEntity.ok(qualityControlService.updateQualityControl(id, qualityControl));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQualityControl(@PathVariable Long id) {
        qualityControlService.deleteQualityControl(id);
        return ResponseEntity.noContent().build();
    }
}