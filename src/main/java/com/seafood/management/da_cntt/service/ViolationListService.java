package com.seafood.management.da_cntt.service;

import com.seafood.management.da_cntt.model.ViolationList;
import com.seafood.management.da_cntt.repository.ViolationListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ViolationListService {

    @Autowired
    private ViolationListRepository violationListRepository;

    public ViolationList saveViolationList(ViolationList violationList) {
        return violationListRepository.save(violationList);
    }

    public List<ViolationList> getAllViolationLists() {
        return violationListRepository.findAll();
    }

    public ViolationList updateViolationList(ViolationList violationList) {
        return violationListRepository.save(violationList);
    }

    public void deleteViolationList(Long id) {
        violationListRepository.deleteById(id);
    }
}