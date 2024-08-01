package com.seafood.management.production_management.service;

import com.seafood.management.production_management.model.ProductionLine;
import com.seafood.management.production_management.repository.ProductionLineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductionLineService {
    @Autowired
    private ProductionLineRepository productionLineRepository;


    public List<ProductionLine> findAllPackaging() {
        return productionLineRepository.findAll();
    }


    public ProductionLine savePackaging(ProductionLine productionLine) {
        return productionLineRepository.save(productionLine);
    }


    public ProductionLine updatePackaging(Long id, ProductionLine productionLine) {
        productionLine.setId(id);
        return productionLineRepository.save(productionLine);
    }


    public void deletePackaging(Long id) {
        productionLineRepository.deleteById(id);
    }
}
