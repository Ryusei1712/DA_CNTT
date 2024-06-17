package com.seafood.management.da_cntt.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "timesheet")
@NoArgsConstructor
@AllArgsConstructor
public class Timesheet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "hours_worked", nullable = false)
    private int hoursWorked;

    @Column(name = "status", nullable = false)
    private String status;

    public Timesheet(Employee employee, LocalDate date, int hoursWorked, String status) {
        this.employee = employee;
        this.date = date;
        this.hoursWorked = hoursWorked;
        this.status = status;
    }

    @Override
    public String toString() {
        return "Timesheet{" +
                "id=" + id +
                ", date=" + date +
                ", hoursWorked=" + hoursWorked +
                ", status='" + status + '\'' +
                '}';
    }
}
