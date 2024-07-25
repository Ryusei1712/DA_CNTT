package com.seafood.management.hr_management.repository;

import com.seafood.management.hr_management.model.Document;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    Optional<Document> findByEmail(String email);

    void deleteByEmail(String email);

    int countByStatus(String status);

    @Query("SELECT d FROM Document d WHERE d.employee.employeeCode = :employeeCode")
    Optional<Document> findByEmployeeCode(String employeeCode);
    @Modifying
    @Transactional
    @Query("DELETE FROM Document d WHERE d.employee.employeeCode = :employeeCode")
    void deleteByEmployeeCode(String employeeCode);
}
