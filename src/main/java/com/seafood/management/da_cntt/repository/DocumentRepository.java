package com.seafood.management.da_cntt.repository;

import com.seafood.management.da_cntt.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<Document, Long> {
}
