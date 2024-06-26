package com.seafood.management.production_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    @Column(name = "workOrderNumber", nullable = false)
    private String workOrderNumber;
    @Column(name = "operation", nullable = false)
    private String operation;
    @Column(name = "sequence", nullable = false)
    private Integer sequence;
    @Column(name = "status", nullable = false)
    private String status;

    @ManyToOne
    @JoinColumn(name = "mo_id")
    private ManufacturingOrder manufacturingOrder;
}
