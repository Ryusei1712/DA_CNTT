package com.seafood.management.da_cntt.repository;

import com.seafood.management.da_cntt.model.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Long> {
    Optional<LeaveRequest> findByEmail(String email);

    void deleteByEmail(String email);

    int countByRequestType(String requestType);
}