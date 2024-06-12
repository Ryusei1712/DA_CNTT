package com.seafood.management.da_cntt.repository;

import com.seafood.management.da_cntt.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    Optional<Document> findByEmail(String email);

    void deleteByEmail(String email);

    int countByStatus(String status);
}
