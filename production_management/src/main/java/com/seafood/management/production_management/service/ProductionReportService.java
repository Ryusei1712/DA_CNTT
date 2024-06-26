package com.seafood.management.production_management.service;

import com.seafood.management.production_management.model.ProductionReport;
import com.seafood.management.production_management.repository.ProductionReportRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;

@Service
public class ProductionReportService {
    @Autowired
    private ProductionReportRepository productionReportRepository;

    public List<ProductionReport> findAllProductionReports() {
        return productionReportRepository.findAll();
    }

    @Transactional
    public ProductionReport saveProductionReport(ProductionReport productionReport) {
        return productionReportRepository.save(productionReport);
    }

    @Transactional
    public ProductionReport updateProductionReport(Long id, ProductionReport productionReport) {
        productionReport.setId(id);
        return productionReportRepository.save(productionReport);
    }

    @Transactional
    public void deleteProductionReport(Long id) {
        productionReportRepository.deleteById(id);
    }
}