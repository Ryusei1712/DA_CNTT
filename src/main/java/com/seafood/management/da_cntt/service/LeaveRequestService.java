package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.model.LeaveRequest;
import com.seafood.management.da_cntt.repository.LeaveRequestRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LeaveRequestService {

    @Autowired
    private LeaveRequestRepository leaveRequestRepository;

    public List<LeaveRequest> getAllLeaveRequests() {
        return leaveRequestRepository.findAll();
    }

    public Optional<LeaveRequest> getLeaveRequestById(Long id) {
        return leaveRequestRepository.findById(id);
    }

    public Optional<LeaveRequest> getLeaveRequestByEmail(String email) {
        return leaveRequestRepository.findByEmail(email);
    }

    @Transactional
    public LeaveRequest saveLeaveRequest(LeaveRequest leaveRequest) {
        return leaveRequestRepository.save(leaveRequest);
    }

    @Transactional
    public Optional<LeaveRequest> updateLeaveRequest(Long id, LeaveRequest leaveRequest) {
        Optional<LeaveRequest> existingLeaveRequestOptional = leaveRequestRepository.findById(id);
        if (existingLeaveRequestOptional.isPresent()) {
            LeaveRequest existingLeaveRequest = existingLeaveRequestOptional.get();
            existingLeaveRequest.setEmployeeId(leaveRequest.getEmployeeId());
            existingLeaveRequest.setEmployeeName(leaveRequest.getEmployeeName());
            existingLeaveRequest.setEmail(leaveRequest.getEmail());
            existingLeaveRequest.setPosition(leaveRequest.getPosition());
            existingLeaveRequest.setReason(leaveRequest.getReason());
            existingLeaveRequest.setRequestType(leaveRequest.getRequestType());
            return Optional.of(leaveRequestRepository.save(existingLeaveRequest));
        } else {
            return Optional.empty();
        }
    }

    @Transactional
    public boolean deleteLeaveRequest(Long id) {
        Optional<LeaveRequest> leaveRequestOptional = leaveRequestRepository.findById(id);
        if (leaveRequestOptional.isPresent()) {
            leaveRequestRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional
    public boolean deleteLeaveRequestByEmail(String email) {
        Optional<LeaveRequest> leaveRequestOptional = leaveRequestRepository.findByEmail(email);
        if (leaveRequestOptional.isPresent()) {
            leaveRequestRepository.deleteByEmail(email);
            return true;
        }
        return false;
    }

    public int countLeaveRequestsByRequestType(String requestType) {
        return leaveRequestRepository.countByRequestType(requestType);
    }
}
