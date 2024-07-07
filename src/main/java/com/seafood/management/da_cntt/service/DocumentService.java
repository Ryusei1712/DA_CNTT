package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.dto.DocumentDTO;
import com.seafood.management.da_cntt.model.Document;
import com.seafood.management.da_cntt.model.Employee;
import com.seafood.management.da_cntt.repository.DocumentRepository;
import com.seafood.management.da_cntt.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public DocumentDTO convertToDTO(Document document) {
        return new DocumentDTO(document.getId(), document.getEmployee().getEmployeeCode(), document.getDocumentType(),
                document.getSenderName(), document.getEmail(), document.getStatus());
    }

    public Document convertToEntity(DocumentDTO documentDTO) {
        Employee employee = employeeRepository.findByEmployeeCode(documentDTO.getEmployeeCode())
                .orElseThrow(() -> new IllegalArgumentException("Employee not found for code: " + documentDTO.getEmployeeCode()));

        Document document = new Document();
        document.setEmployee(employee);
        document.setDocumentType(documentDTO.getDocumentType());
        document.setSenderName(documentDTO.getSenderName());
        document.setEmail(documentDTO.getEmail());
        document.setStatus(documentDTO.getStatus());
        return document;
    }

    public List<DocumentDTO> getAllDocuments() {
        List<Document> document = documentRepository.findAll();
        return document.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public Optional<DocumentDTO> getDocumentById(Long id) {
        Optional<Document> document = documentRepository.findById(id);
        return document.map(this::convertToDTO);
    }

    public Optional<DocumentDTO> getDocumentByEmail(String email) {
        return documentRepository.findByEmail(email).map(this::convertToDTO);
    }

    @Transactional
    public Document saveDocument(DocumentDTO documentDTO) {
        Document document = convertToEntity(documentDTO);
        return documentRepository.save(document);
    }

    @Transactional
    public Optional<Document> updateDocument(Long id, Document document) {
        Optional<Document> existingDocumentOptional = documentRepository.findById(id);
        if (existingDocumentOptional.isPresent()) {
            Document existingDocument = existingDocumentOptional.get();
            existingDocument.setDocumentType(document.getDocumentType());
            existingDocument.setSenderName(document.getSenderName());
            existingDocument.setEmail(document.getEmail());
            existingDocument.setStatus(document.getStatus());
            backupDocumentInfo("backup/edit/document", existingDocument);
            return Optional.of(documentRepository.save(existingDocument));
        } else {
            return Optional.empty();
        }
    }

    @Transactional
    public boolean deleteDocument(Long id) {
        Optional<Document> documentOptional = documentRepository.findById(id);
        if (documentOptional.isPresent()) {
            documentRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional
    public boolean deleteDocumentByEmployeeCode(String employeeCode) {
        Optional<Document> documentOptional = documentRepository.findByEmployeeCode(employeeCode);
        if (documentOptional.isPresent()) {
            Document document = documentOptional.get();
            backupDocumentInfo("backup/delete/document", document);
            documentRepository.deleteByEmployeeCode(employeeCode);
            return true;
        }
        return false;
    }

    @Transactional
    public boolean deleteDocumentByEmail(String email) {
        Optional<Document> documentOptional = documentRepository.findByEmail(email);
        if (documentOptional.isPresent()) {
            documentRepository.deleteByEmail(email);
            return true;
        }
        return false;
    }

    public int countDocumentsByStatus(String status) {
        return documentRepository.countByStatus(status);
    }

    private void backupDocumentInfo(String path, Document document) {
        String documentInfo = document.toString();
        String backupDirectoryPath = path ; // Specify your backup directory here
        String backupFilePath = backupDirectoryPath + "/" + document.getSenderName() + ".txt";

        // Create the backup directory if it doesn't exist
        File backupDirectory = new File(backupDirectoryPath);
        if (!backupDirectory.exists()) {
            backupDirectory.mkdirs();
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(backupFilePath))) {
            writer.write(documentInfo);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
