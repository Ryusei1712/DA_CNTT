package com.seafood.management.production_management.controller;

import com.seafood.management.production_management.dto.DepreciationDTO;
import com.seafood.management.production_management.model.Depreciation;
import com.seafood.management.production_management.service.DepreciationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/production/depreciation")
public class DepreciationController {

    @Autowired
    private DepreciationService depreciationService;

    @GetMapping
    public ResponseEntity<List<DepreciationDTO>> getAllDepreciation() {
        return ResponseEntity.ok(depreciationService.findAllDepreciation());
    }

    @PostMapping
    public ResponseEntity<Depreciation> createDepreciation(@RequestBody DepreciationDTO depreciation) {
        return ResponseEntity.ok(depreciationService.saveDepreciation(depreciation));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DepreciationDTO> updateDepreciation(@PathVariable Long id) {
        Optional<DepreciationDTO> updatedDepreciationDTO = depreciationService.updateStatusDepreciation(id);

        return updatedDepreciationDTO
                .map(dto -> new ResponseEntity<>(dto, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBOM(@PathVariable Long id) {
        depreciationService.deleteDepreciation(id);
        return ResponseEntity.noContent().build();
    }
}
