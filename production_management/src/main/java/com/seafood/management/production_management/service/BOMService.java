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
        return new BOMDTO(bom.getMaterialName(),bom.getQuantity(),bom.getUnit());
    }

    public BillOfMaterials convertToEntity(BOMDTO bomdto) {
        BillOfMaterials billOfMaterials = bomRepository.findByMaterialName(bomdto.getProductDMName())
                .orElseThrow(() -> new IllegalArgumentException("BOM not found for code: " + bomdto.getProductDMName()));
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
    public BillOfMaterials saveBillOfMaterials(BillOfMaterials billOfMaterials) {
        return bomRepository.save(billOfMaterials);
    }

    @Transactional
    public BillOfMaterials updateBillOfMaterials(Long id, BillOfMaterials billOfMaterials) {
        billOfMaterials.setId(id);
        return bomRepository.save(billOfMaterials);
    }

    @Transactional
    public void deleteBillOfMaterials(Long id) {
        bomRepository.deleteById(id);
    }
}
