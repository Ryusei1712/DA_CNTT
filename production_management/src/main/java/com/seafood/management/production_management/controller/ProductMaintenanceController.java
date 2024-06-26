package com.seafood.management.production_management.controller;

import com.seafood.management.production_management.model.ProductMaintenance;
import com.seafood.management.production_management.service.ProductMaintenanceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/production/maintenance")
public class ProductMaintenanceController {

    @Autowired
    private ProductMaintenanceService productMaintenanceService;

    @GetMapping
    public ResponseEntity<List<ProductMaintenance>> getAllProductMaintenances() {
        return ResponseEntity.ok(productMaintenanceService.findAllProductMaintenance());
    }

    @PostMapping
    public ResponseEntity<ProductMaintenance> createProductMaintenance(@RequestBody ProductMaintenance productMaintenance) {
        return ResponseEntity.ok(productMaintenanceService.saveProductMaintenance(productMaintenance));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductMaintenance> updateProductMaintenance(@PathVariable Long id, @RequestBody ProductMaintenance productMaintenance) {
        return ResponseEntity.ok(productMaintenanceService.updateProductMaintenance(id, productMaintenance));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductMaintenance(@PathVariable Long id) {
        productMaintenanceService.deleteProductionRoute(id);
        return ResponseEntity.noContent().build();
    }
}
