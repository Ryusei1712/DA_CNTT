package com.seafood.management.production_management.service;

import com.seafood.management.production_management.dto.QualityControlDTO;
import com.seafood.management.production_management.dto.WorkOrderDTO;
import com.seafood.management.production_management.model.Depreciation;
import com.seafood.management.production_management.model.QualityControl;
import com.seafood.management.production_management.model.WorkOrder;
import com.seafood.management.production_management.repository.WorkOrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WorkOrderService {
    @Autowired
    private WorkOrderRepository workOrderRepository;
    public WorkOrderDTO convertToDTO(WorkOrder workOrder) {
        return new WorkOrderDTO(
                workOrder.getId(),
                workOrder.getProductionLine().getName(),
                workOrder.getWorkOrderDate(),
                workOrder.getSequence(),
                workOrder.getStatus()
        );
    }
    public List<WorkOrderDTO> findAllWorkOrders() {
        List<WorkOrder> workOrders = workOrderRepository.findAll();
        return workOrders.stream().map(this::convertToDTO).collect(Collectors.toList());
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