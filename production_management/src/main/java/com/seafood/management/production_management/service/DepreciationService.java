package com.seafood.management.production_management.service;

import com.seafood.management.production_management.dto.DepreciationDTO;
import com.seafood.management.production_management.model.Depreciation;
import com.seafood.management.production_management.repository.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DepreciationService {
    @Autowired
    private DepreciationRepository depreciationRepository;
    @Autowired
    private ProductionLineRepository productionLineRepository;
    public DepreciationDTO convertToDTO(Depreciation depreciation) {
        return new DepreciationDTO(
                depreciation.getId(),
                depreciation.getProductionLine().getName(),
                depreciation.getNumberOfCancellations(),
                depreciation.getStatus()
        );
    }
    public Depreciation convertToEntity(DepreciationDTO depreciationDTO) {
        Depreciation depreciation = new Depreciation();
        depreciation.setId(depreciationDTO.getId());
        depreciation.setNumberOfCancellations(depreciationDTO.getNumberOfCancellations());
        depreciation.setStatus(depreciationDTO.getStatus());
        depreciation.setProductionLine(productionLineRepository.findByName(depreciationDTO.getProductRun()));
        return depreciation;
    }
    public List<DepreciationDTO> findAllDepreciation() {
        List<Depreciation> depreciation = depreciationRepository.findAll();
        return depreciation.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Transactional
    public Depreciation saveDepreciation(DepreciationDTO depreciationDTO) {
        Depreciation depreciation = convertToEntity(depreciationDTO);
        return depreciationRepository.save(depreciation);
    }
    @Transactional
    public Optional<DepreciationDTO> updateStatusDepreciation(Long id) {
        return depreciationRepository.findById(id).map(existingDepreciation -> {
            if (existingDepreciation.getStatus().equals("Đang hoạt động")) {
                existingDepreciation.setStatus("Ngừng");
                existingDepreciation.setNumberOfCancellations(existingDepreciation.getNumberOfCancellations() + 1);
            } else {
                existingDepreciation.setStatus("Đang hoạt động");
            }
            if (existingDepreciation.getNumberOfCancellations() >= 5 && "Đang hoạt động".equals(existingDepreciation.getStatus())) {
                existingDepreciation.setStatus("Ngừng");
            }
            BackupUtil.backupInfo("backup/edit/depreciation", existingDepreciation,existingDepreciation.getId()+"-"+existingDepreciation.getNumberOfCancellations());
            Depreciation updatedDepreciation = depreciationRepository.save(existingDepreciation);


            return convertToDTO(updatedDepreciation);
        });
    }

    @Transactional
    public void deleteDepreciation(Long id) {
        depreciationRepository.deleteById(id);
    }
}
