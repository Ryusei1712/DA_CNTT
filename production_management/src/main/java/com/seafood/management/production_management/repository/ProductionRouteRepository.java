package com.seafood.management.production_management.repository;

import com.seafood.management.production_management.model.ProductionRoute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductionRouteRepository extends JpaRepository<ProductionRoute, Long> {}