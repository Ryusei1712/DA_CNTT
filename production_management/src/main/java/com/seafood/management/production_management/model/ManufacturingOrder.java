package com.seafood.management.production_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "manufacturing_order")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ManufacturingOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "orderNumber", nullable = false)
    private String orderNumber;
    @Column(name = "product", nullable = false)
    private String product;
    @Column(name = "quantity", nullable = false)
    private Integer quantity;
    @Column(name = "status", nullable = false)
    private String status;
}
