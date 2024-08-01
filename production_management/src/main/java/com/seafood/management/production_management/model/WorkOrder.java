package com.seafood.management.production_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "work_order")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WorkOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "workOrderDate", nullable = false)
    private LocalDate workOrderDate ;
    @Column(name = "sequence", nullable = false)
    private String sequence;
    @Column(name = "status", nullable = false)
    private String status;
    @ManyToOne
    @JoinColumn(name = "production_line_id")
    private ProductionLine productionLine;

    public WorkOrder(LocalDate workOrderDate, String sequence, String status, ProductionLine productionLine) {
        this.workOrderDate = workOrderDate;
        this.sequence = sequence;
        this.status = status;
        this.productionLine = productionLine;
    }

    @Override
    public String toString() {
        return "WorkOrder{" +
                "id=" + id +
                ", workOrderDate=" + workOrderDate +
                ", sequence='" + sequence + '\'' +
                ", status='" + status + '\'' +
                ", productionLine=" + productionLine +
                '}';
    }
}
