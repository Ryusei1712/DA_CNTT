package com.seafood.management.production_management.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BOMDTO {
    private Long id;
    private String productDMName;
    private Double productDMQuantity;
    private String productDMUnit;

    public BOMDTO(Long id, String productDMName, Double productDMQuantity, String productDMUnit) {
        this.id = id;
        this.productDMName = productDMName;
        this.productDMQuantity = productDMQuantity;
        this.productDMUnit = productDMUnit;
    }
}
