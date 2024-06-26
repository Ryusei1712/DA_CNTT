package com.seafood.management.production_management.service;

import com.seafood.management.production_management.model.WorkCenter;
import com.seafood.management.production_management.repository.WorkCenterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;

@Service
public class WorkCenterService {
    @Autowired
    private WorkCenterRepository workCenterRepository;

    public List<WorkCenter> findAllWorkCenters() {
        return workCenterRepository.findAll();
    }

    @Transactional
    public WorkCenter saveWorkCenter(WorkCenter workCenter) {
        return workCenterRepository.save(workCenter);
    }

    @Transactional
    public WorkCenter updateWorkCenter(Long id, WorkCenter workCenter) {
        workCenter.setId(id);
        return workCenterRepository.save(workCenter);
    }

    @Transactional
    public void deleteWorkCenter(Long id) {
        workCenterRepository.deleteById(id);
    }
}
