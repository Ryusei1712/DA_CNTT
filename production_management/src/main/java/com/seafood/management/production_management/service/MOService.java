package com.seafood.management.production_management.service;

import com.seafood.management.production_management.model.ManufacturingOrder;
import com.seafood.management.production_management.repository.MORepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MOService  {

    @Autowired
    private MORepository moRepository;


    public List<ManufacturingOrder> findAllMO() {
        return moRepository.findAll();
    }


    public ManufacturingOrder saveMO(ManufacturingOrder mo) {
        return moRepository.save(mo);
    }


    public ManufacturingOrder updateMO(Long id, ManufacturingOrder mo) {
        mo.setId(id);
        return moRepository.save(mo);
    }


    public void deleteMO(Long id) {
        moRepository.deleteById(id);
    }
}
