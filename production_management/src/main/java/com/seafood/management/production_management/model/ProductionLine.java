package com.seafood.management.production_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "productionLine")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductionLine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "productionLine")
    private List<WorkOrder> workOrders;

    @OneToMany(mappedBy = "productionLine")
    private List<QualityControl> qualityControls;

    @OneToMany(mappedBy = "productionLine")
    private List<Packaging> packagings;

    @OneToMany(mappedBy = "productionLine")
    private List<Depreciation> depreciations;


    public ProductionLine(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "ProductionLine{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", workOrders=" + workOrders +
                ", qualityControls=" + qualityControls +
                ", packagings=" + packagings +
                ", depreciations=" + depreciations +
                '}';
    }
}

