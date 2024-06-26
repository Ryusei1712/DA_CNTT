package com.seafood.management.da_cntt.controller;

import com.seafood.management.da_cntt.dto.DocumentDTO;
import com.seafood.management.da_cntt.model.Document;
import com.seafood.management.da_cntt.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/documents")
public class DocumentController {

    @Autowired
    private DocumentService documentService;

    @GetMapping
    public ResponseEntity<List<DocumentDTO>> getAllDocuments() {
        List<DocumentDTO> documents = documentService.getAllDocuments();
        return new ResponseEntity<>(documents, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DocumentDTO> getDocumentById(@PathVariable Long id) {
        Optional<DocumentDTO> document = documentService.getDocumentById(id);
        return document.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Document> addDocument(@RequestBody Document document) {
        Document savedDocument = documentService.saveDocument(document);
        return new ResponseEntity<>(savedDocument, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Document> updateDocument(@PathVariable Long id, @RequestBody Document document) {
        Optional<Document> updatedDocument = documentService.updateDocument(id, document);
        return updatedDocument.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{employeeCode}")
    public ResponseEntity<String> deleteDocumentByEmployeeCode(@PathVariable String employeeCode) {
        boolean deleted = documentService.deleteDocumentByEmployeeCode(employeeCode);
        return deleted ? new ResponseEntity<>("Document has been deleted successfully", HttpStatus.OK)
                : new ResponseEntity<>("Document not found", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/email/{email}")
    public ResponseEntity<String> deleteDocumentByEmail(@PathVariable String email) {
        boolean deleted = documentService.deleteDocumentByEmail(email);
        return deleted ? new ResponseEntity<>("Document has been deleted successfully", HttpStatus.OK)
                : new ResponseEntity<>("Document not found", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/countByStatus/{status}")
    public ResponseEntity<Integer> countDocumentsByStatus(@PathVariable String status) {
        int count = documentService.countDocumentsByStatus(status);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
}
