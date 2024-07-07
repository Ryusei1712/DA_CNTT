package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.dto.ViolationListDTO;
import com.seafood.management.da_cntt.model.Employee;
import com.seafood.management.da_cntt.model.ViolationList;
import com.seafood.management.da_cntt.repository.EmployeeRepository;
import com.seafood.management.da_cntt.repository.ViolationListRepository;
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
public class ViolationListService {
    @Autowired
    private ViolationListRepository violationListRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public ViolationListDTO convertToDTO(ViolationList violationList) {
        return new ViolationListDTO(violationList.getId(), violationList.getEmployee().getEmployeeCode(), violationList.getEmployeeName(),
                violationList.getViolationType(), violationList.getSeverity(), violationList.getStatus());
    }

    public ViolationList convertToEntity(ViolationListDTO violationListDTO) {
        Employee employee = employeeRepository.findByEmployeeCode(violationListDTO.getEmployeeCode())
                .orElseThrow(() -> new IllegalArgumentException("Employee not found for code: " + violationListDTO.getEmployeeCode()));

        ViolationList violationList = new ViolationList();
        violationList.setEmployee(employee);
        violationList.setEmployeeName(violationListDTO.getEmployeeName());
        violationList.setViolationType(violationListDTO.getViolationType());
        violationList.setSeverity(violationListDTO.getSeverity());
        violationList.setStatus(violationListDTO.getStatus());
        return violationList;
    }

    public List<ViolationListDTO> getAllViolationLists() {
        List<ViolationList> violationLists = violationListRepository.findAll();
        return violationLists.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public Optional<ViolationListDTO> getViolationListById(Long id) {
        Optional<ViolationList> violationList = violationListRepository.findById(id);
        return violationList.map(this::convertToDTO);
    }

    public List<ViolationList> getViolationListByEmployeeId(String employeeId) {
        return violationListRepository.findByEmployee_EmployeeCode(employeeId);
    }

    @Transactional
    public ViolationList saveViolationList(ViolationListDTO violationListDTO) {
        ViolationList violationList = convertToEntity(violationListDTO);
        return violationListRepository.save(violationList);
    }

    @Transactional
    public Optional<ViolationListDTO> updateViolationList(Long id, ViolationListDTO violationListDTO) {
        Optional<ViolationList> existingViolationListOptional = violationListRepository.findById(id);
        if (existingViolationListOptional.isPresent()) {
            ViolationList existingViolationList = existingViolationListOptional.get();
            existingViolationList.setEmployeeName(violationListDTO.getEmployeeName());
            existingViolationList.setViolationType(violationListDTO.getViolationType());
            existingViolationList.setSeverity(violationListDTO.getSeverity());
            existingViolationList.setStatus(violationListDTO.getStatus());
            backupViolationListsInfo("backup/edit/violationLists", existingViolationList);
            ViolationList updatedViolation = violationListRepository.save(existingViolationList);
            return Optional.of(convertToDTO(updatedViolation));
        } else {
            return Optional.empty();
        }
    }

    @Transactional
    public boolean deleteViolationList(Long id) {
        Optional<ViolationList> violationListOptional = violationListRepository.findById(id);
        if (violationListOptional.isPresent()) {
            ViolationList violationList = violationListOptional.get();
            backupViolationListsInfo("backup/delete/violationLists", violationList);
            violationListRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional
    public boolean deleteViolationListByEmployeeCode(String employeeCode) {
        List<ViolationList> violationLists = violationListRepository.findByEmployee_EmployeeCode(employeeCode);
        if (!violationLists.isEmpty()) {
            for (ViolationList violationList : violationLists) {
                backupViolationListsInfo("backup/delete/violationLists", violationList);
            }
            violationListRepository.deleteByEmployeeCode(employeeCode);
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

    private void backupViolationListsInfo(String path, ViolationList violationList) {
        String violationListsInfo = violationList.toString();
        String backupDirectoryPath = path;
        String backupFilePath = backupDirectoryPath + "/" + violationList.getEmployeeName() + ".txt";

        File backupDirectory = new File(backupDirectoryPath);
        if (!backupDirectory.exists()) {
            backupDirectory.mkdirs();
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(backupFilePath))) {
            writer.write(violationListsInfo);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
