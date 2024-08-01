package com.seafood.management.production_management.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class PackagingDTO {
    private LocalDate packagingDate;
    private String productID;
    private String productRun;

    public PackagingDTO(LocalDate packagingDate, String productID, String productRun) {
        this.packagingDate = packagingDate;
        this.productID = productID;
        this.productRun = productRun;
    }
}
