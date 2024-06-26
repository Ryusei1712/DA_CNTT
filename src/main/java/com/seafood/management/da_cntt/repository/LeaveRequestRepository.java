package com.seafood.management.da_cntt.repository;

import com.seafood.management.da_cntt.model.LeaveRequest;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Long> {
    Optional<LeaveRequest> findByEmail(String email);

    void deleteByEmail(String email);

    int countByRequestType(String requestType);

    @Query("SELECT lr FROM LeaveRequest lr WHERE lr.employee.employeeCode = :employeeCode")
    Optional<LeaveRequest> findByEmployeeCode(String employeeCode);
    @Modifying
    @Transactional
    @Query("DELETE FROM LeaveRequest lr WHERE lr.employee.employeeCode = :employeeCode")
    void deleteByEmployeeCode(String employeeCode);
}