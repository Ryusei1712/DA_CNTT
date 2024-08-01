package com.seafood.management.production_management.service;

import com.seafood.management.production_management.model.*;
import com.seafood.management.production_management.repository.*;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
public class DataInitialization {

    @Autowired
    private BOMRepository billOfMaterialRepository;

    @Autowired
    private WorkOrderRepository workOrderRepository;

    @Autowired
    private QualityControlRepository qualityControlRepository;

    @Autowired
    private PackagingRepository packagingRepository;

    @Autowired
    private DepreciationRepository depreciationRepository;

    @Autowired
    private ProductionLineRepository productionLineRepository;

    @PostConstruct
    public void initializeData() {
        // Initialize production lines
        ProductionLine line1 = new ProductionLine("Dây chuyền 1");
        ProductionLine line2 = new ProductionLine("Dây chuyền 2");
        ProductionLine line3 = new ProductionLine("Dây chuyền 3");

        productionLineRepository.saveAll(List.of(line1, line2, line3));

        // Initialize Bill Of Materials
        BillOfMaterials bom1 = new BillOfMaterials("Cá cơm", 5000.0, "kg");
        BillOfMaterials bom2 = new BillOfMaterials("Cá mòi", 3000.0, "kg");
        BillOfMaterials bom3 = new BillOfMaterials("Muối", 500.0, "kg");
        BillOfMaterials bom4 = new BillOfMaterials("Chất bảo quản axit formic", 50.0, "kg");
        BillOfMaterials bom5 = new BillOfMaterials("Nước", 10000.0, "lít");
        BillOfMaterials bom6 = new BillOfMaterials("Cá thu", 4000.0, "kg");
        BillOfMaterials bom7 = new BillOfMaterials("Cá ngừ", 6000.0, "kg");
        BillOfMaterials bom8 = new BillOfMaterials("Vitamin và khoáng chất", 200.0, "kg");
        BillOfMaterials bom9 = new BillOfMaterials("Chất chống oxy hóa", 100.0, "kg");
        BillOfMaterials bom10 = new BillOfMaterials("Cá trích", 3500.0, "kg");

        billOfMaterialRepository.saveAll(List.of(bom1, bom2, bom3, bom4, bom5, bom6, bom7, bom8, bom9, bom10));

        // Initialize Work Orders
        WorkOrder workOrder1 = new WorkOrder(LocalDate.now(), "Rửa cá", "Tốt", line1);
        WorkOrder workOrder2 = new WorkOrder(LocalDate.now(), "Nghiền nhỏ", "Tốt", line1);
        WorkOrder workOrder3 = new WorkOrder(LocalDate.now(), "Nấu chín", "Tốt", line1);
        WorkOrder workOrder4 = new WorkOrder(LocalDate.now(), "Lọc bỏ dầu", "Tốt", line1);
        WorkOrder workOrder5 = new WorkOrder(LocalDate.now(), "Sấy khô", "Tốt", line1);
        WorkOrder workOrder6 = new WorkOrder(LocalDate.now(), "Nghiền thành bột", "Tốt", line1);
        WorkOrder workOrder7 = new WorkOrder(LocalDate.now(), "Đóng gói", "Tốt", line1);

        WorkOrder workOrder8 = new WorkOrder(LocalDate.now(), "Rửa cá", "Tốt", line2);
        WorkOrder workOrder9 = new WorkOrder(LocalDate.now(), "Nghiền nhỏ", "Tốt", line2);
        WorkOrder workOrder10 = new WorkOrder(LocalDate.now(), "Nấu chín", "Tốt", line2);
        WorkOrder workOrder11 = new WorkOrder(LocalDate.now(), "Lọc bỏ dầu", "Tốt", line2);
        WorkOrder workOrder12 = new WorkOrder(LocalDate.now(), "Sấy khô", "Tốt", line2);
        WorkOrder workOrder13 = new WorkOrder(LocalDate.now(), "Nghiền thành bột", "Tốt", line2);
        WorkOrder workOrder14 = new WorkOrder(LocalDate.now(), "Đóng gói", "Tốt", line2);

        WorkOrder workOrder15 = new WorkOrder(LocalDate.now(), "Rửa cá", "Tốt", line3);
        WorkOrder workOrder16 = new WorkOrder(LocalDate.now(), "Nghiền nhỏ", "Tốt", line3);
        WorkOrder workOrder17 = new WorkOrder(LocalDate.now(), "Nấu chín", "Tốt", line3);
        WorkOrder workOrder18 = new WorkOrder(LocalDate.now(), "Lọc bỏ dầu", "Tốt", line3);
        WorkOrder workOrder19 = new WorkOrder(LocalDate.now(), "Sấy khô", "Tốt", line3);
        WorkOrder workOrder20 = new WorkOrder(LocalDate.now(), "Nghiền thành bột", "Tốt", line3);
        WorkOrder workOrder21 = new WorkOrder(LocalDate.now(), "Đóng gói", "Tốt", line3);

        workOrderRepository.saveAll(List.of(
                workOrder1, workOrder2, workOrder3, workOrder4, workOrder5, workOrder6, workOrder7,
                workOrder8, workOrder9, workOrder10, workOrder11, workOrder12, workOrder13, workOrder14,
                workOrder15, workOrder16, workOrder17, workOrder18, workOrder19, workOrder20, workOrder21
        ));

        // Initialize Quality Controls
        QualityControl qc1 = new QualityControl("Nguyễn Thành Danh", "Tốt", line1);
        QualityControl qc2 = new QualityControl("Vũ Đình Phúc", "Tốt", line2);
        QualityControl qc3 = new QualityControl("Trần Văn Hùng", "Tốt", line3);

        qualityControlRepository.saveAll(List.of(qc1, qc2, qc3));

        // Initialize Packagings
        Packaging packaging1 = new Packaging("001", LocalDate.now(), line1);
        Packaging packaging2 = new Packaging("002", LocalDate.now(), line2);
        Packaging packaging3 = new Packaging("003", LocalDate.now(), line3);

        packagingRepository.saveAll(List.of(packaging1, packaging2, packaging3));

        // Initialize Depreciations
        Depreciation depreciation1 = new Depreciation(line1, 7, "Ngừng");
        Depreciation depreciation2 = new Depreciation(line2, 1, "Ngừng");
        Depreciation depreciation3 = new Depreciation(line3, 5, "Ngừng");

        depreciationRepository.saveAll(List.of(depreciation1, depreciation2, depreciation3));
    }
}
