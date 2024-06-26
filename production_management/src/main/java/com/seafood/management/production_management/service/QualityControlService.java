package com.seafood.management.production_management.service;

import com.seafood.management.production_management.model.QualityControl;
import com.seafood.management.production_management.repository.QualityControlRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;

@Service
public class QualityControlService {
    @Autowired
    private QualityControlRepository qualityControlRepository;

    public List<QualityControl> findAllQualityControls() {
        return qualityControlRepository.findAll();
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