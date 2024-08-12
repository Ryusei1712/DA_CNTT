package com.seafood.management.production_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "depreciation")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Depreciation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "production_line_id")
    private ProductionLine productionLine;
    @Column(name = "numberOfCancellations", nullable = false)
    private Integer  numberOfCancellations;
    @Column(name = "status", nullable = false)
    private String status;


    @Override
    public String toString() {
        return "Depreciation{" +
                "id=" + id +
                ", productionLine=" + productionLine.getName() +
                ", numberOfCancellations=" + numberOfCancellations +
                ", status='" + status + '\'' +
                '}';
    }
}
