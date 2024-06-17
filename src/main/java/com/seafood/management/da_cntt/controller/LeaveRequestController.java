package com.seafood.management.da_cntt.controller;

import com.seafood.management.da_cntt.model.LeaveRequest;
import com.seafood.management.da_cntt.service.LeaveRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/leaveRequests")
public class LeaveRequestController {

    @Autowired
    private LeaveRequestService leaveRequestService;

    @GetMapping
    public ResponseEntity<List<LeaveRequest>> getAllLeaveRequests() {
        List<LeaveRequest> leaveRequests = leaveRequestService.getAllLeaveRequests();
        return new ResponseEntity<>(leaveRequests, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LeaveRequest> getLeaveRequestById(@PathVariable Long id) {
        Optional<LeaveRequest> leaveRequest = leaveRequestService.getLeaveRequestById(id);
        return leaveRequest.map(request -> new ResponseEntity<>(request, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<LeaveRequest> addLeaveRequest(@RequestBody LeaveRequest leaveRequest) {
        LeaveRequest savedLeaveRequest = leaveRequestService.saveLeaveRequest(leaveRequest);
        return new ResponseEntity<>(savedLeaveRequest, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LeaveRequest> updateLeaveRequest(@PathVariable Long id, @RequestBody LeaveRequest leaveRequest) {
        Optional<LeaveRequest> updatedLeaveRequest = leaveRequestService.updateLeaveRequest(id, leaveRequest);
        return updatedLeaveRequest.map(request -> new ResponseEntity<>(request, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteLeaveRequest(@PathVariable Long id) {
        boolean deleted = leaveRequestService.deleteLeaveRequest(id);
        return deleted ? new ResponseEntity<>("Leave request has been deleted successfully", HttpStatus.OK)
                : new ResponseEntity<>("Leave request not found", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/countByRequestType/{requestType}")
    public ResponseEntity<Integer> countLeaveRequestsByRequestType(@PathVariable String requestType) {
        int count = leaveRequestService.countLeaveRequestsByRequestType(requestType);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
}
