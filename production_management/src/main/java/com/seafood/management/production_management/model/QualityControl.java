package com.seafood.management.production_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "quality_control")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QualityControl {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "productName", nullable = false)
    private String productName;
    @Column(name = "qualityCriteria", nullable = false)
    private String qualityCriteria;
    @Column(name = "result", nullable = false)
    private String result;
    @Column(name = "inspector", nullable = false)
    private String inspector;
}
