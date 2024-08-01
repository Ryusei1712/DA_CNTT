package com.seafood.management.production_management.service;

import com.seafood.management.production_management.dto.DepreciationDTO;
import com.seafood.management.production_management.model.BillOfMaterials;
import com.seafood.management.production_management.model.Depreciation;
import com.seafood.management.production_management.repository.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DepreciationService {
    @Autowired
    private DepreciationRepository depreciationRepository;

    public DepreciationDTO convertToDTO(Depreciation depreciation) {
        return new DepreciationDTO(
                depreciation.getProductionLine().getName(),
                depreciation.getNumberOfCancellations(),
                depreciation.getStatus()
        );
    }

    public List<DepreciationDTO> findAllDepreciation() {
        List<Depreciation> depreciation = depreciationRepository.findAll();
        return depreciation.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Transactional
    public Depreciation saveDepreciation(Depreciation depreciation) {
        return depreciationRepository.save(depreciation);
    }

    @Transactional
    public Depreciation updateDepreciation(Long id, Depreciation depreciation) {
        depreciation.setId(id);
        return depreciationRepository.save(depreciation);
    }

    @Transactional
    public void deleteDepreciation(Long id) {
        depreciationRepository.deleteById(id);
    }
}
