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

    private String employeeId;
    private String employeeName;
    private String violationType;
    private int severity;
    private String status;

    public ViolationList(String employeeId, String employeeName, String violationType, int severity, String status) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.violationType = violationType;
        this.severity = severity;
        this.status = status;
    }
}
