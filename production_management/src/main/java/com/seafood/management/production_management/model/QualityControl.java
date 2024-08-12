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
    @Column(name = "inspector", nullable = false)
    private String inspector;
    @Column(name = "result", nullable = false)
    private String result;
    @Column(name = "resultDate", nullable = false)
    private String resultDate;
    @ManyToOne
    @JoinColumn(name = "production_line_id")
    private ProductionLine productionLine;
    @Column(name = "approved", nullable = false)
    private boolean approved;

    public QualityControl(String inspector, String result, ProductionLine productionLine, String resultDate, boolean approved) {
        this.inspector = inspector;
        this.result = result;
        this.productionLine = productionLine;
        this.resultDate = resultDate;
        this.approved = approved;
    }

}
