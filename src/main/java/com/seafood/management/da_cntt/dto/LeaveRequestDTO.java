package com.seafood.management.da_cntt.dto;

import com.seafood.management.da_cntt.model.Employee;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LeaveRequestDTO {

    private Long id;

    private String employeeName;

    private String email;

    private String position;

    private String reason;

    private String requestType;

    public LeaveRequestDTO(Long id, String employeeName, String email, String position, String reason, String requestType) {
        this.id = id;
        this.employeeName = employeeName;
        this.email = email;
        this.position = position;
        this.reason = reason;
        this.requestType = requestType;
    }
}
