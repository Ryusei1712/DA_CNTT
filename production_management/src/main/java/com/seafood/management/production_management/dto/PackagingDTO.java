package com.seafood.management.production_management.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class PackagingDTO {
    private Long id;
    private String packagingDate;
    private String inspector;
    private String productID;
    private String productRun;
    private String quality;

    public PackagingDTO(Long id, String packagingDate, String inspector, String productID, String productRun, String quality) {
        this.id = id;
        this.packagingDate = packagingDate;
        this.inspector = inspector;
        this.productID = productID;
        this.productRun = productRun;
        this.quality = quality;
    }
}
