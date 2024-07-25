package com.seafood.management.hr_management.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TimeSheetDTO {
    private  Long id;

    private String employeeCode;

    private String date;

    private int hoursWorked;

    private String status;

    public TimeSheetDTO(Long id, String employeeCode, String date, int hoursWorked, String status) {
        this.id = id;
        this.employeeCode = employeeCode;
        this.date = date;
        this.hoursWorked = hoursWorked;
        this.status = status;
    }
}
