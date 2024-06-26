package com.seafood.management.production_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "production_report")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductionReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "reportType", nullable = false)
    private String reportType;
    @Column(name = "description", nullable = false)
    private String description;
    @Column(name = "createdDate", nullable = false)
    private LocalDate createdDate;
}
