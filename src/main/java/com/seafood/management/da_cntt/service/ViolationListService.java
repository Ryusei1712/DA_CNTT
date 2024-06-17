package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.model.ViolationList;
import com.seafood.management.da_cntt.repository.ViolationListRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ViolationListService {

    @Autowired
    private ViolationListRepository violationListRepository;

    public List<ViolationList> getAllViolationLists() {
        return violationListRepository.findAll();
    }

    public Optional<ViolationList> getViolationListById(Long id) {
        return violationListRepository.findById(id);
    }

    public List<ViolationList> getViolationListByEmployeeId(String employeeId) {
        return violationListRepository.findByEmployee_EmployeeCode(employeeId);
    }

    @Transactional
    public ViolationList saveViolationList(ViolationList violationList) {
        return violationListRepository.save(violationList);
    }

    @Transactional
    public Optional<ViolationList> updateViolationList(Long id, ViolationList violationList) {
        Optional<ViolationList> existingViolationListOptional = violationListRepository.findById(id);
        if (existingViolationListOptional.isPresent()) {
            ViolationList existingViolationList = existingViolationListOptional.get();
            existingViolationList.setEmployee(violationList.getEmployee());
            existingViolationList.setEmployeeName(violationList.getEmployeeName());
            existingViolationList.setViolationType(violationList.getViolationType());
            existingViolationList.setSeverity(violationList.getSeverity());
            existingViolationList.setStatus(violationList.getStatus());
            return Optional.of(violationListRepository.save(existingViolationList));
        } else {
            return Optional.empty();
        }
    }

    @Transactional
    public boolean deleteViolationList(Long id) {
        Optional<ViolationList> violationListOptional = violationListRepository.findById(id);
        if (violationListOptional.isPresent()) {
            violationListRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public int countViolationListsBySeverity(int severity) {
        return violationListRepository.countBySeverity(severity);
    }

    public int countViolationListsByStatus(String status) {
        return violationListRepository.countByStatus(status);
    }
}
