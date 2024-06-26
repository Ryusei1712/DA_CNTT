package com.seafood.management.production_management.service;

import com.seafood.management.production_management.model.Packaging;
import com.seafood.management.production_management.repository.PackagingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackagingService {
    @Autowired
    private PackagingRepository packagingRepository;


    public List<Packaging> findAllPackaging() {
        return packagingRepository.findAll();
    }


    public Packaging savePackaging(Packaging packaging) {
        return packagingRepository.save(packaging);
    }


    public Packaging updatePackaging(Long id, Packaging packaging) {
        packaging.setId(id);
        return packagingRepository.save(packaging);
    }


    public void deletePackaging(Long id) {
        packagingRepository.deleteById(id);
    }
}
