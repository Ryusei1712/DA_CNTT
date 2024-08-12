package com.seafood.management.production_management.service;

import com.seafood.management.production_management.dto.BOMDTO;
import com.seafood.management.production_management.model.BillOfMaterials;
import com.seafood.management.production_management.repository.BOMRepository;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class BOMService {
    @Autowired
    private BOMRepository bomRepository;

    public BOMDTO convertToDTO(BillOfMaterials bom) {
        return new BOMDTO(bom.getId(),bom.getMaterialName(),bom.getQuantity(),bom.getUnit());
    }

    public BillOfMaterials convertToEntity(BOMDTO bomdto) {
        BillOfMaterials billOfMaterials = new BillOfMaterials();
        billOfMaterials.setId(bomdto.getId());
        billOfMaterials.setMaterialName(bomdto.getProductDMName());
        billOfMaterials.setQuantity(bomdto.getProductDMQuantity());
        billOfMaterials.setUnit(bomdto.getProductDMUnit());
        return billOfMaterials;
    }
   
    public List<BOMDTO> findAllBillOfMaterials() {
        List<BillOfMaterials> billOfMaterials = bomRepository.findAll();
        return billOfMaterials.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Transactional
    public BillOfMaterials saveBillOfMaterials(BOMDTO bomdto) {
        BillOfMaterials billOfMaterials = convertToEntity(bomdto);
        return bomRepository.save(billOfMaterials);
    }

    @Transactional
    public Optional<BillOfMaterials> updateBillOfMaterials(Long id, BOMDTO billOfMaterials) {
        Optional<BillOfMaterials> existingBOMOptional = bomRepository.findById(id);
        if (existingBOMOptional.isPresent()) {
            BillOfMaterials existingBOM = existingBOMOptional.get();
            BackupUtil.backupInfo("backup/edit/bom", existingBOM,existingBOM.getMaterialName()+"original");
            existingBOM.setMaterialName(billOfMaterials.getProductDMName());
            existingBOM.setQuantity(billOfMaterials.getProductDMQuantity());
            existingBOM.setUnit(billOfMaterials.getProductDMUnit());
            BackupUtil.backupInfo("backup/edit/bom", existingBOM,existingBOM.getMaterialName());
            return Optional.of(bomRepository.save(existingBOM));
        } else {
            return Optional.empty();
        }
    }
    @Transactional
    public boolean deleteBillOfMaterials(Long id) {
        Optional<BillOfMaterials> billOfMaterialsOptional = bomRepository.findById(id);
        if (billOfMaterialsOptional.isPresent()) {
            BillOfMaterials bom = billOfMaterialsOptional.get();
            BackupUtil.backupInfo("backup/delete/bom", bom,bom.getMaterialName());
            bomRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
