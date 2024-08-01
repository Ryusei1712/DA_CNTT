package com.seafood.management.production_management.repository;

import com.seafood.management.production_management.model.Depreciation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepreciationRepository extends JpaRepository<Depreciation, Long> {}
