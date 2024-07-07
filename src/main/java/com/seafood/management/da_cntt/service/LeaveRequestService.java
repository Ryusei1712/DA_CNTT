package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.dto.LeaveRequestDTO;
import com.seafood.management.da_cntt.model.Employee;
import com.seafood.management.da_cntt.model.LeaveRequest;
import com.seafood.management.da_cntt.repository.EmployeeRepository;
import com.seafood.management.da_cntt.repository.LeaveRequestRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LeaveRequestService {
    @Autowired
    private LeaveRequestRepository leaveRequestRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public LeaveRequestDTO convertToDTO(LeaveRequest leaveRequest) {
        return new LeaveRequestDTO(leaveRequest.getId(), leaveRequest.getEmployee().getEmployeeCode(), leaveRequest.getEmployeeName(),
                leaveRequest.getEmail(), leaveRequest.getPosition(), leaveRequest.getReason(), leaveRequest.getRequestType());
    }

    public LeaveRequest convertToEntity(LeaveRequestDTO leaveRequestDTO) {
        Employee employee = employeeRepository.findByEmployeeCode(leaveRequestDTO.getEmployeeCode())
                .orElseThrow(() -> new IllegalArgumentException("Employee not found for code: " + leaveRequestDTO.getEmployeeCode()));

        LeaveRequest leaveRequest = new LeaveRequest();
        leaveRequest.setEmployee(employee);
        leaveRequest.setEmployeeName(leaveRequestDTO.getEmployeeName());
        leaveRequest.setEmail(leaveRequestDTO.getEmail());
        leaveRequest.setPosition(leaveRequestDTO.getPosition());
        leaveRequest.setReason(leaveRequestDTO.getReason());
        leaveRequest.setRequestType(leaveRequestDTO.getRequestType());
        return leaveRequest;
    }

    public List<LeaveRequestDTO> getAllLeaveRequests() {
        List<LeaveRequest> leaveRequests = leaveRequestRepository.findAll();
        return leaveRequests.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public Optional<LeaveRequestDTO> getLeaveRequestById(Long id) {
        Optional<LeaveRequest> leaveRequest = leaveRequestRepository.findById(id);
        return leaveRequest.map(this::convertToDTO);
    }

    public Optional<LeaveRequest> getLeaveRequestByEmail(String email) {
        return leaveRequestRepository.findByEmail(email);
    }

    @Transactional
    public LeaveRequest saveLeaveRequest(LeaveRequestDTO leaveRequestDTO) {
        LeaveRequest leaveRequest = convertToEntity(leaveRequestDTO);
        return leaveRequestRepository.save(leaveRequest);
    }

    @Transactional
    public Optional<LeaveRequest> updateLeaveRequest(Long id, LeaveRequestDTO leaveRequestDTO) {
        Optional<LeaveRequest> existingLeaveRequestOptional = leaveRequestRepository.findById(id);
        if (existingLeaveRequestOptional.isPresent()) {
            LeaveRequest existingLeaveRequest = existingLeaveRequestOptional.get();
            existingLeaveRequest.setEmployeeName(leaveRequestDTO.getEmployeeName());
            existingLeaveRequest.setEmail(leaveRequestDTO.getEmail());
            existingLeaveRequest.setPosition(leaveRequestDTO.getPosition());
            existingLeaveRequest.setReason(leaveRequestDTO.getReason());
            existingLeaveRequest.setRequestType(leaveRequestDTO.getRequestType());
            backupLeaveRequestsInfo("backup/edit/leaveRequest",existingLeaveRequest);
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
    public boolean deleteLeaveRequestByEmployeeCode(String employeeCode) {
        Optional<LeaveRequest> leaveRequestOptional = leaveRequestRepository.findByEmployeeCode(employeeCode);
        if (leaveRequestOptional.isPresent()) {
            LeaveRequest leaveRequest = leaveRequestOptional.get();
            backupLeaveRequestsInfo("backup/delete/leaveRequest",leaveRequest);
            leaveRequestRepository.deleteByEmployeeCode(employeeCode);
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

    private void backupLeaveRequestsInfo(String path, LeaveRequest leaveRequest) {
        String leaveRequestInfo = leaveRequest.toString();
        String backupDirectoryPath = path;
        String backupFilePath = backupDirectoryPath + "/" + leaveRequest.getEmployeeName() + ".txt";

        // Create the backup directory if it doesn't exist
        File backupDirectory = new File(backupDirectoryPath);
        if (!backupDirectory.exists()) {
            backupDirectory.mkdirs();
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(backupFilePath))) {
            writer.write(leaveRequestInfo);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
