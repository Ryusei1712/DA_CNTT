package com.seafood.management.production_management.service;

import com.seafood.management.production_management.dto.PackagingDTO;
import com.seafood.management.production_management.model.BillOfMaterials;
import com.seafood.management.production_management.model.Packaging;
import com.seafood.management.production_management.repository.PackagingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PackagingService {
    @Autowired
    private PackagingRepository packagingRepository;

    public PackagingDTO convertToDTO(Packaging packaging) {
        return new PackagingDTO(
                packaging.getPakagingDate(),
                packaging.getProductID(),
                packaging.getProductionLine().getName()
        );
    }

    public List<PackagingDTO> findAllPackaging() {
        List<Packaging> packagings = packagingRepository.findAll();
        return packagings.stream().map(this::convertToDTO).collect(Collectors.toList());
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
