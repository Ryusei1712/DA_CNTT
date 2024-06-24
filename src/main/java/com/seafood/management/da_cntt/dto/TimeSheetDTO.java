package com.seafood.management.da_cntt.dto;

import com.seafood.management.da_cntt.model.Employee;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class TimeSheetDTO {
    private String employeeCode;

    private String date;

    private int hoursWorked;

    private String status;

    public TimeSheetDTO(String employeeCode, String date, int hoursWorked, String status) {
        this.employeeCode = employeeCode;
        this.date = date;
        this.hoursWorked = hoursWorked;
        this.status = status;
    }
}
