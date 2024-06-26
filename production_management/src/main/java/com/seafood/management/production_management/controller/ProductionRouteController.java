package com.seafood.management.production_management.controller;

import com.seafood.management.production_management.model.ProductionRoute;
import com.seafood.management.production_management.service.ProductionRouteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/production/routes")
public class ProductionRouteController {

    @Autowired
    private ProductionRouteService productionRouteService;

    @GetMapping
    public ResponseEntity<List<ProductionRoute>> getAllProductionRoutes() {
        return ResponseEntity.ok(productionRouteService.findAllProductionRoute());
    }

    @PostMapping
    public ResponseEntity<ProductionRoute> createProductionRoute(@RequestBody ProductionRoute productionRoute) {
        return ResponseEntity.ok(productionRouteService.saveProductionRoute(productionRoute));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductionRoute> updateProductionRoute(@PathVariable Long id, @RequestBody ProductionRoute productionRoute) {
        return ResponseEntity.ok(productionRouteService.updateProductionRoute(id, productionRoute));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductionRoute(@PathVariable Long id) {
        productionRouteService.deleteProductionRoute(id);
        return ResponseEntity.noContent().build();
    }
}
