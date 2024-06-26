package com.seafood.management.production_management.service;

import com.seafood.management.production_management.model.BillOfMaterials;
import com.seafood.management.production_management.repository.BOMRepository;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BOMService {
    @Autowired
    private BOMRepository bomRepository;

   
    public List<BillOfMaterials> findAllBillOfMaterials() {
        return bomRepository.findAll();
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
