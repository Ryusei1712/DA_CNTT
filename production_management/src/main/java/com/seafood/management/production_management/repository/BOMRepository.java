package com.seafood.management.production_management.repository;

import com.seafood.management.production_management.model.BillOfMaterials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BOMRepository extends JpaRepository<BillOfMaterials, Long> {
    @Query("SELECT b FROM BillOfMaterials b WHERE b.materialName = :productDMName")
    Optional<BillOfMaterials> findByMaterialName(String productDMName);
}
