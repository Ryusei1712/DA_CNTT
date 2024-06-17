package com.seafood.management.da_cntt.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EmployeeDTO {
    private Long id;
    private String employeeCode;
    private String employeeName;
    private String email;
    private String position;
    private String status;


    public EmployeeDTO(Long id, String employeeCode, String employeeName, String email, String position, String status) {
        this.id = id;
        this.employeeCode = employeeCode;
        this.employeeName = employeeName;
        this.email = email;
        this.position = position;
        this.status = status;
    }


}
