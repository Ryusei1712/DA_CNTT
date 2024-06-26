package com.seafood.management.production_management.repository;

import com.seafood.management.production_management.model.ProductMaintenance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductMaintenanceRepository extends JpaRepository<ProductMaintenance, Long> {}