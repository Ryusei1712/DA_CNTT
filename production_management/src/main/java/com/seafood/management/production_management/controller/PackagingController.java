package com.seafood.management.production_management.controller;

import com.seafood.management.production_management.model.Packaging;
import com.seafood.management.production_management.service.PackagingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/production/packagings")
public class PackagingController {

    @Autowired
    private PackagingService packagingService;

    @GetMapping
    public ResponseEntity<List<Packaging>> getAllPackagings() {
        return ResponseEntity.ok(packagingService.findAllPackaging());
    }

    @PostMapping
    public ResponseEntity<Packaging> createPackaging(@RequestBody Packaging packaging) {
        return ResponseEntity.ok(packagingService.savePackaging(packaging));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Packaging> updatePackaging(@PathVariable Long id, @RequestBody Packaging packaging) {
        return ResponseEntity.ok(packagingService.updatePackaging(id, packaging));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePackaging(@PathVariable Long id) {
        packagingService.deletePackaging(id);
        return ResponseEntity.noContent().build();
    }
}
