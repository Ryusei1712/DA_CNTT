package com.seafood.management.da_cntt.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "leave_request")
@NoArgsConstructor
@AllArgsConstructor
public class LeaveRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(name = "employee_name", nullable = false)
    private String employeeName;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "position")
    private String position;

    @Column(name = "reason")
    private String reason;

    @Column(name = "request_type")
    private String requestType;

    public LeaveRequest(Employee employee, String employeeName, String email, String position, String reason, String requestType) {
        this.employee = employee;
        this.employeeName = employeeName;
        this.email = email;
        this.position = position;
        this.reason = reason;
        this.requestType = requestType;
    }

    @Override
    public String toString() {
        return
                "id=" + id +
                ", employeeName=" + employeeName +
                ", email=" + email  +
                ", position=" + position +
                ", reason=" + reason +
                ", requestType=" + requestType +
                '\n';
    }
}
