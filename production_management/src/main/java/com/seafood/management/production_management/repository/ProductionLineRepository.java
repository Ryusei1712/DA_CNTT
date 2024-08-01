package com.seafood.management.production_management.repository;


import com.seafood.management.production_management.model.ProductionLine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductionLineRepository extends JpaRepository<ProductionLine, Long> {}
