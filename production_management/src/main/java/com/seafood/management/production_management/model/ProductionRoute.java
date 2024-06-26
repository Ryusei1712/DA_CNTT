package com.seafood.management.production_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "production_route")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductionRoute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "routeName", nullable = false)
    private String routeName;
    @Column(name = "description", nullable = false)
    private String description;

    @OneToMany(mappedBy = "productionRoute")
    private List<WorkOrder> workOrders;
}
