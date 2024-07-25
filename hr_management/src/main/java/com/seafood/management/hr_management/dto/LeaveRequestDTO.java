package com.seafood.management.hr_management.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LeaveRequestDTO {
    private  Long id;

    private String employeeCode;

    private String employeeName;

    private String email;

    private String position;

    private String reason;

    private String requestType;

    public LeaveRequestDTO(Long id, String employeeCode, String employeeName, String email, String position, String reason, String requestType) {
        this.id = id;
        this.employeeCode = employeeCode;
        this.employeeName = employeeName;
        this.email = email;
        this.position = position;
        this.reason = reason;
        this.requestType = requestType;
    }
}
