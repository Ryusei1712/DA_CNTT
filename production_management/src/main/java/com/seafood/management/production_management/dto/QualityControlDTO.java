package com.seafood.management.production_management.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class QualityControlDTO {
    private String inspector;
    private String productRun;
    private String qualityResult;

    public QualityControlDTO(String inspector, String productRun, String qualityResult) {
        this.inspector = inspector;
        this.productRun = productRun;
        this.qualityResult = qualityResult;
    }
}
