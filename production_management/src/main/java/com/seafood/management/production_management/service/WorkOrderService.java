package com.seafood.management.production_management.service;

import com.seafood.management.production_management.model.WorkOrder;
import com.seafood.management.production_management.repository.WorkOrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;

@Service
public class WorkOrderService {
    @Autowired
    private WorkOrderRepository workOrderRepository;

    public List<WorkOrder> findAllWorkOrders() {
        return workOrderRepository.findAll();
    }

    @Transactional
    public WorkOrder saveWorkOrder(WorkOrder workOrder) {
        return workOrderRepository.save(workOrder);
    }

    @Transactional
    public WorkOrder updateWorkOrder(Long id, WorkOrder workOrder) {
        workOrder.setId(id);
        return workOrderRepository.save(workOrder);
    }

    @Transactional
    public void deleteWorkOrder(Long id) {
        workOrderRepository.deleteById(id);
    }
}