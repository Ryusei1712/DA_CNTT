package com.seafood.management.da_cntt.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "document")
@NoArgsConstructor
@AllArgsConstructor
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String documentType;
    private String employeeId;
    private String senderName;
    private String email;
    private String status;

    public Document(String documentType, String employeeId, String senderName, String email, String status) {
        this.documentType = documentType;
        this.employeeId = employeeId;
        this.senderName = senderName;
        this.email = email;
        this.status = status;
    }
}
