package com.seafood.management.da_cntt.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "violation_list")
@NoArgsConstructor
@AllArgsConstructor
public class ViolationList {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "employeeId", nullable = false)
    private String employeeId;
    @Column(name = "employeeName", nullable = false)
    private String employeeName;
    @Column(name = "violationType")
    private String violationType;
    @Column(name = "severity")
    private int severity;
    @Column(name = "status")
    private String status;

    public ViolationList(String employeeId, String employeeName, String violationType, int severity, String status) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.violationType = violationType;
        this.severity = severity;
        this.status = status;
    }
}
