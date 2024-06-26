package com.seafood.management.da_cntt.dto;

import com.seafood.management.da_cntt.model.Employee;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class ViolationListDTO {
    private  Long id;

    private String employeeCode;

    private String employeeName;

    private String violationType;

    private int severity;

    private String status;

    public ViolationListDTO(Long id, String employeeCode, String employeeName, String violationType, int severity, String status) {
        this.id = id;
        this.employeeCode = employeeCode;
        this.employeeName = employeeName;
        this.violationType = violationType;
        this.severity = severity;
        this.status = status;
    }

}
