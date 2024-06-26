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

    @Column(name = "document_type")
    private String documentType;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(name = "sender_name", nullable = false)
    private String senderName;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "status")
    private String status;

    public Document(String documentType, Employee employee, String senderName, String email, String status) {
        this.documentType = documentType;
        this.employee = employee;
        this.senderName = senderName;
        this.email = email;
        this.status = status;
    }

    @Override
    public String toString() {
        return
                "id=" + id +
                ", documentType=" + documentType  +
                ", senderName=" + senderName  +
                ", email=" + email  +
                ", status=" + status  +
                '\n';
    }
}
