package com.seafood.management.da_cntt.repository;

import com.seafood.management.da_cntt.model.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Long> {
}