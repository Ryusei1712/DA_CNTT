package com.seafood.management.production_management.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QualityControlDTO {
    private Long id;
    private String inspector;
    private String productRun;
    private String qualityResult;
    private String resultDate;
    private boolean approved;
}
