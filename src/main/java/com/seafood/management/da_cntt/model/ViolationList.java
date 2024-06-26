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

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(name = "employee_name", nullable = false)
    private String employeeName;

    @Column(name = "violation_type")
    private String violationType;

    @Column(name = "severity")
    private int severity;

    @Column(name = "status")
    private String status;

    public ViolationList(Employee employee, String employeeName, String violationType, int severity, String status) {
        this.employee = employee;
        this.employeeName = employeeName;
        this.violationType = violationType;
        this.severity = severity;
        this.status = status;
    }

    @Override
    public String toString() {
        return
                "id=" + id +
                ", employeeName=" + employeeName  +
                ", violationType=" + violationType  +
                ", severity=" + severity +
                ", status=" + status+
                '\n';
    }
}
