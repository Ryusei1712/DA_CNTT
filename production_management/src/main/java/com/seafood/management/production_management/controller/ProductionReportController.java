package com.seafood.management.production_management.controller;

import com.seafood.management.production_management.model.ProductionReport;
import com.seafood.management.production_management.service.ProductionReportService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/production/reports")
public class ProductionReportController {

    @Autowired
    private ProductionReportService productionReportService;

    @GetMapping
    public ResponseEntity<List<ProductionReport>> getAllProductionReports() {
        return ResponseEntity.ok(productionReportService.findAllProductionReports());
    }

    @PostMapping
    public ResponseEntity<ProductionReport> createProductionReport(@RequestBody ProductionReport productionReport) {
        return ResponseEntity.ok(productionReportService.saveProductionReport(productionReport));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductionReport> updateProductionReport(@PathVariable Long id, @RequestBody ProductionReport productionReport) {
        return ResponseEntity.ok(productionReportService.updateProductionReport(id, productionReport));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductionReport(@PathVariable Long id) {
        productionReportService.deleteProductionReport(id);
        return ResponseEntity.noContent().build();
    }
}