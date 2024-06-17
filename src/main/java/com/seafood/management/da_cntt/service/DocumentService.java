package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.model.Document;
import com.seafood.management.da_cntt.repository.DocumentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository documentRepository;

    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }

    public Optional<Document> getDocumentById(Long id) {
        return documentRepository.findById(id);
    }

    public Optional<Document> getDocumentByEmail(String email) {
        return documentRepository.findByEmail(email);
    }

    @Transactional
    public Document saveDocument(Document document) {
        return documentRepository.save(document);
    }

    @Transactional
    public Optional<Document> updateDocument(Long id, Document document) {
        Optional<Document> existingDocumentOptional = documentRepository.findById(id);
        if (existingDocumentOptional.isPresent()) {
            Document existingDocument = existingDocumentOptional.get();
            existingDocument.setDocumentType(document.getDocumentType());
            existingDocument.setEmployee(document.getEmployee());
            existingDocument.setSenderName(document.getSenderName());
            existingDocument.setEmail(document.getEmail());
            existingDocument.setStatus(document.getStatus());
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
}
