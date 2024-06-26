package com.seafood.management.production_management.repository;

import com.seafood.management.production_management.model.ManufacturingOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MORepository extends JpaRepository<ManufacturingOrder, Long> {}
