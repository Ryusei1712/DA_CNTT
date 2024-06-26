package com.seafood.management.da_cntt.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "employee")
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "employee_code", nullable = false, unique = true)
    private String employeeCode;

    @Column(name = "employee_name", nullable = false)
    private String employeeName;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "position")
    private String position;

    @Column(name = "status")
    private String status;

    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Document> documents;

    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<LeaveRequest> leaveRequests;

    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ViolationList> violationLists;

    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Timesheet> timesheets;

    public Employee(String employeeCode, String employeeName, String email, String position, String status) {
        this.employeeCode = employeeCode;
        this.employeeName = employeeName;
        this.email = email;
        this.position = position;
        this.status = status;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", employeeCode=" + employeeCode + '\n' +
                "employeeName=" + employeeName + '\n' +
                "email=" + email + '\n' +
                "position=" + position + '\n' +
                "status=" + status + '\n' +
                "DOCUMENTS:" + '\n' + documents + '\n' +
                "LEAVE REQUESTS:" + '\n' + leaveRequests + '\n' +
                "VIOLATION LISTS :" + '\n' + violationLists + '\n' +
                "TIMESHEETS:" + '\n' + timesheets + '\n' +
                '}';
    }
}
