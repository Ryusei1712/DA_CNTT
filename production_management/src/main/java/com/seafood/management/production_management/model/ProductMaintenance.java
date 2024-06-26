package com.seafood.management.production_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;

@Entity
@Table(name = "product_maintenance")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductMaintenance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "maintenanceType", nullable = false)
    private String maintenanceType;
    @Column(name = "description", nullable = false)
    private String description;
    @Column(name = "status", nullable = false)
    private String status;
    @Column(name = "scheduledDate", nullable = false)
    private LocalDate scheduledDate;
}
