package com.seafood.management.production_management.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DepreciationDTO {
    private String productRun;
    private Integer numberOfCancellations;
    private String status;

    public DepreciationDTO(String productRun, Integer numberOfCancellations, String status) {
        this.productRun = productRun;
        this.numberOfCancellations = numberOfCancellations;
        this.status = status;
    }
}
