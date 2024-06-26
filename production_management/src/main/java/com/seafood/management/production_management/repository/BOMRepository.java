package com.seafood.management.production_management.repository;

import com.seafood.management.production_management.model.BillOfMaterials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BOMRepository extends JpaRepository<BillOfMaterials, Long> {}
