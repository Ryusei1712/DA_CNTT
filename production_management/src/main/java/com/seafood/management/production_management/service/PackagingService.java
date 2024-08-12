package com.seafood.management.production_management.service;

import com.seafood.management.production_management.dto.BOMDTO;
import com.seafood.management.production_management.dto.PackagingDTO;
import com.seafood.management.production_management.model.BillOfMaterials;
import com.seafood.management.production_management.model.Packaging;
import com.seafood.management.production_management.repository.PackagingRepository;
import com.seafood.management.production_management.repository.ProductionLineRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PackagingService {
    @Autowired
    private PackagingRepository packagingRepository;
    @Autowired
    private ProductionLineRepository productionLineRepository;
    public PackagingDTO convertToDTO(Packaging packaging) {
        return new PackagingDTO(
                packaging.getId(),
                packaging.getPackagingDate(),
                packaging.getInspector(),
                packaging.getProductID(),
                packaging.getProductionLine().getName(),
                packaging.getQuality()
        );
    }
    public Packaging convertToEntity(PackagingDTO pakagingDTO) {
        Packaging packaging = new Packaging();
        packaging.setId(pakagingDTO.getId());
        packaging.setPackagingDate(pakagingDTO.getPackagingDate());
        packaging.setInspector(pakagingDTO.getInspector());
        packaging.setProductID(pakagingDTO.getProductID());
        packaging.setProductionLine(productionLineRepository.findByName(pakagingDTO.getProductRun()));
        packaging.setQuality(pakagingDTO.getQuality());
        return packaging;
    }

    public List<PackagingDTO> findAllPackaging() {
        List<Packaging> packagings = packagingRepository.findAll();
        return packagings.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Transactional
    public Packaging savePackaging(PackagingDTO packagingDTO) {
        Packaging packaging = convertToEntity(packagingDTO);
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
