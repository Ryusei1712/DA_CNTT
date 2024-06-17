package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.dto.EmployeeDTO;
import com.seafood.management.da_cntt.dto.ViolationListDTO;
import com.seafood.management.da_cntt.model.Employee;
import com.seafood.management.da_cntt.model.ViolationList;
import com.seafood.management.da_cntt.repository.ViolationListRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ViolationListService {

    @Autowired
    private ViolationListRepository violationListRepository;
    public ViolationListDTO convertToDTO(ViolationList violationList) {
        return new ViolationListDTO(violationList.getId(), violationList.getEmployeeName(),
                violationList.getViolationType(), violationList.getSeverity(), violationList.getStatus());
    }
    public List<ViolationListDTO> getAllViolationLists() {
        List<ViolationList> violationList = violationListRepository.findAll();
        return violationList.stream().map(this::convertToDTO).collect(Collectors.toList());
    }
    public Optional<ViolationListDTO> getViolationListById(Long id) {
        Optional<ViolationList> violationList = violationListRepository.findById(id);
        return violationList.map(this::convertToDTO);
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
