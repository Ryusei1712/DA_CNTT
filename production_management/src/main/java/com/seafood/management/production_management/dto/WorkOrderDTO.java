package com.seafood.management.production_management.dto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class WorkOrderDTO {
    private  Long id;
    private String productionLine;
    private LocalDate workOrderDate;
    private String sequence;
    private String status;

    public WorkOrderDTO(Long id, String productionLine, LocalDate workOrderDate, String sequence, String status) {
        this.id = id;
        this.productionLine = productionLine;
        this.workOrderDate = workOrderDate;
        this.sequence = sequence;
        this.status = status;
    }
}
