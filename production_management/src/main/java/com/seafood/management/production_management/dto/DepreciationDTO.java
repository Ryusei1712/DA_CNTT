package com.seafood.management.production_management.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DepreciationDTO {
    private Long id;
    private String productRun;
    private Integer numberOfCancellations;
    private String status;

    public DepreciationDTO(Long id, String productRun, Integer numberOfCancellations, String status) {
        this.id = id;
        this.productRun = productRun;
        this.numberOfCancellations = numberOfCancellations;
        this.status = status;
    }
}
