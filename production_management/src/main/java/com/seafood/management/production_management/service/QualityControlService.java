package com.seafood.management.production_management.service;

import com.seafood.management.production_management.dto.BOMDTO;
import com.seafood.management.production_management.dto.QualityControlDTO;
import com.seafood.management.production_management.model.BillOfMaterials;
import com.seafood.management.production_management.model.QualityControl;
import com.seafood.management.production_management.repository.QualityControlRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class QualityControlService {
    @Autowired
    private QualityControlRepository qualityControlRepository;

    public QualityControlDTO convertToDTO(QualityControl qualityControl) {
        return new QualityControlDTO(qualityControl.getInspector(),
                qualityControl.getProductionLine().getName(),
                qualityControl.getResult());
    }

    public List<QualityControlDTO> findAllQualityControls() {
        List<QualityControl> qualityControl = qualityControlRepository.findAll();
        return qualityControl.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Transactional
    public QualityControl saveQualityControl(QualityControl qualityControl) {
        return qualityControlRepository.save(qualityControl);
    }

    @Transactional
    public QualityControl updateQualityControl(Long id, QualityControl qualityControl) {
        qualityControl.setId(id);
        return qualityControlRepository.save(qualityControl);
    }

    @Transactional
    public void deleteQualityControl(Long id) {
        qualityControlRepository.deleteById(id);
    }
}