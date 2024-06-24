package com.seafood.management.da_cntt.dto;

import com.seafood.management.da_cntt.model.Employee;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DocumentDTO {
    private String employeeCode;

    private String documentType;

    private String senderName;

    private String email;

    private String status;

    public DocumentDTO(String employeeCode, String documentType,  String senderName, String email, String status) {
        this.employeeCode = employeeCode;
        this.documentType = documentType;
        this.senderName = senderName;
        this.email = email;
        this.status = status;
    }
}
