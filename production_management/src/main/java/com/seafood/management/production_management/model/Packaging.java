package com.seafood.management.production_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "packaging")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Packaging {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "productID", nullable = false)
    private String productID;
    @Column(name = "pakagingDate", nullable = false)
    private LocalDate pakagingDate;
    @ManyToOne
    @JoinColumn(name = "production_line_id")
    private ProductionLine productionLine;

    public Packaging(String productID, LocalDate pakagingDate, ProductionLine productionLine) {
        this.productID = productID;
        this.pakagingDate = pakagingDate;
        this.productionLine = productionLine;
    }

    @Override
    public String toString() {
        return "Packaging{" +
                "id=" + id +
                ", productID='" + productID + '\'' +
                ", pakagingDate=" + pakagingDate +
                ", productionLine=" + productionLine +
                '}';
    }
}
