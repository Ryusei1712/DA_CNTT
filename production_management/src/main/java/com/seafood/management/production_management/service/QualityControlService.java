package com.seafood.management.production_management.service;

import com.seafood.management.production_management.dto.QualityControlDTO;
import com.seafood.management.production_management.model.QualityControl;
import com.seafood.management.production_management.repository.ProductionLineRepository;
import com.seafood.management.production_management.repository.QualityControlRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QualityControlService {
    @Autowired
    private QualityControlRepository qualityControlRepository;
    @Autowired
    private ProductionLineRepository productionLineRepository;

    public QualityControlDTO convertToDTO(QualityControl qualityControl) {
        return new QualityControlDTO(
                qualityControl.getId(),
                qualityControl.getInspector(),
                qualityControl.getProductionLine().getName(),
                qualityControl.getResult(),
                qualityControl.getResultDate(),
                qualityControl.isApproved());
    }
    public QualityControl convertToEntity(QualityControlDTO qualityControlDTO) {
        QualityControl qualityControl = new QualityControl();
        qualityControl.setInspector(qualityControlDTO.getInspector());
        qualityControl.setResult(qualityControlDTO.getQualityResult());
        qualityControl.setResultDate(qualityControlDTO.getResultDate());
        qualityControl.setProductionLine(productionLineRepository.findByName(qualityControlDTO.getProductRun()));
        qualityControl.setApproved(qualityControlDTO.isApproved());
        return qualityControl;
    }
    public List<QualityControlDTO> findAllQualityControls() {
        List<QualityControl> qualityControl = qualityControlRepository.findAll();
        return qualityControl.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Transactional
    public QualityControl saveQualityControl(QualityControlDTO qualityControlDTO) {
        QualityControl qualityControl = convertToEntity(qualityControlDTO);
        return qualityControlRepository.save(qualityControl);
    }

    @Transactional
    public QualityControl updateQualityControl(Long id, QualityControl qualityControl) {
        qualityControl.setId(id);
        return qualityControlRepository.save(qualityControl);
    }

    @Transactional
    public void deleteQualityControl(Long id) {
        Optional<QualityControl> qualityControlOptional = qualityControlRepository.findById(id);
        if (qualityControlOptional.isPresent()) {
            QualityControl qualityControl = qualityControlOptional.get();
            BackupUtil.backupInfo("backup/delete/qualityControl", qualityControl,qualityControl.getId()+"-"+qualityControl.getResultDate());
            qualityControlRepository.deleteById(id);
        }
    }
}