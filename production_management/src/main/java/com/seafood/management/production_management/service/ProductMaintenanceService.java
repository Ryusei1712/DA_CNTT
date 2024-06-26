package com.seafood.management.production_management.service;

import com.seafood.management.production_management.model.ProductMaintenance;
import com.seafood.management.production_management.repository.ProductMaintenanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductMaintenanceService {
    @Autowired
    private ProductMaintenanceRepository productMaintenanceRepository;


    public List<ProductMaintenance> findAllProductMaintenance() {
        return productMaintenanceRepository.findAll();
    }


    public ProductMaintenance saveProductMaintenance(ProductMaintenance productMaintenance) {
        return productMaintenanceRepository.save(productMaintenance);
    }


    public ProductMaintenance updateProductMaintenance(Long id, ProductMaintenance productMaintenance) {
        productMaintenance.setId(id);
        return productMaintenanceRepository.save(productMaintenance);
    }

    public void deleteProductionRoute(Long id) {
        productMaintenanceRepository.deleteById(id);
    }
}
