package com.seafood.management.production_management.service;


import com.seafood.management.production_management.model.ProductionRoute;
import com.seafood.management.production_management.repository.ProductionRouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductionRouteService {
    @Autowired
    private ProductionRouteRepository productionRouteRepository;


    public List<ProductionRoute> findAllProductionRoute() {
        return productionRouteRepository.findAll();
    }


    public ProductionRoute saveProductionRoute(ProductionRoute productionRoute) {
        return productionRouteRepository.save(productionRoute);
    }


    public ProductionRoute updateProductionRoute(Long id, ProductionRoute productionRoute) {
        productionRoute.setId(id);
        return productionRouteRepository.save(productionRoute);
    }

    public void deleteProductionRoute(Long id) {
        productionRouteRepository.deleteById(id);
    }
}
