package com.seafood.management.da_cntt.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "leaveRequest")
@NoArgsConstructor
@AllArgsConstructor
public class LeaveRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "employeeId", nullable = false)
    private String employeeId;
    @Column(name = "employeeName", nullable = false)
    private String employeeName;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "position")
    private String position;
    @Column(name = "reason")
    private String reason;
    @Column(name = "requestType")
    private String requestType;

    public LeaveRequest(String employeeId, String employeeName, String email, String position, String reason, String requestType) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.email = email;
        this.position = position;
        this.reason = reason;
        this.requestType = requestType;
    }
}
