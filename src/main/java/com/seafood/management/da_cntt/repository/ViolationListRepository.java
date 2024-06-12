package com.seafood.management.da_cntt.repository;

import com.seafood.management.da_cntt.model.ViolationList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ViolationListRepository extends JpaRepository<ViolationList, Long> {
    int countBySeverity(int severity);

    int countByStatus(String status);

    Optional<ViolationList> findByEmployeeId(String employeeId);
}
