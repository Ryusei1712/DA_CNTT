package com.seafood.management.production_management.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "bill_of_materials")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BillOfMaterials {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "materialName", nullable = false)
    private String materialName;
    @Column(name = "quantity", nullable = false)
    private Double quantity;
    @Column(name = "unit", nullable = false)
    private String unit;
}
