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
    private Long id;

    private LocalDate date;

    private int hoursWorked;

    private String status;

    public TimeSheetDTO(Long id, LocalDate date, int hoursWorked, String status) {
        this.id = id;
        this.date = date;
        this.hoursWorked = hoursWorked;
        this.status = status;
    }
}
