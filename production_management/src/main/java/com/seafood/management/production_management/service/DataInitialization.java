package com.seafood.management.production_management.service;

import com.seafood.management.production_management.dto.BOMDTO;
import com.seafood.management.production_management.dto.DepreciationDTO;
import com.seafood.management.production_management.dto.PackagingDTO;
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
    private BOMService bomService;
    @Autowired
    private WorkOrderRepository workOrderRepository;
    @Autowired
    private QualityControlRepository qualityControlRepository;
    @Autowired
    private ProductionLineRepository productionLineRepository;
    @Autowired
    private PackagingService packagingService;
    @Autowired
    private DepreciationService depreciationService;
    @PostConstruct
    public void initializeData() {
        // Initialize production lines
        ProductionLine line1 = new ProductionLine("Dây chuyền 1");
        ProductionLine line2 = new ProductionLine("Dây chuyền 2");
        ProductionLine line3 = new ProductionLine("Dây chuyền 3");

        productionLineRepository.saveAll(List.of(line1, line2, line3));

        // Initialize Bill Of Materials
        bomService.saveBillOfMaterials(new BOMDTO(null,"Cá cơm", 5000.0, "kg"));
        bomService.saveBillOfMaterials(new BOMDTO(null,"Cá mòi", 3000.0, "kg"));
        bomService.saveBillOfMaterials(new BOMDTO(null,"Muối", 500.0, "kg"));
        bomService.saveBillOfMaterials(new BOMDTO(null,"Chất bảo quản axit formic", 50.0, "kg"));
        bomService.saveBillOfMaterials(new BOMDTO(null,"Nước", 10000.0, "lít"));
        bomService.saveBillOfMaterials(new BOMDTO(null,"Cá thu", 4000.0, "kg"));
        bomService.saveBillOfMaterials(new BOMDTO(null,"Cá ngừ", 6000.0, "kg"));
        bomService.saveBillOfMaterials(new BOMDTO(null,"Vitamin và khoáng chất", 200.0, "kg"));
        bomService.saveBillOfMaterials(new BOMDTO(null,"Chất chống oxy hóa", 100.0, "kg"));
        bomService.saveBillOfMaterials(new BOMDTO(null,"Cá trích", 3500.0, "kg"));


        // Initialize Work Orders
        WorkOrder workOrder1 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Rửa cá", "Không tốt", line1);
        WorkOrder workOrder2 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Nghiền nhỏ", "Tốt", line1);
        WorkOrder workOrder3 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Nấu chín", "Tốt", line1);
        WorkOrder workOrder4 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Lọc bỏ dầu", "Tốt", line1);
        WorkOrder workOrder5 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Sấy khô", "Tốt", line1);
        WorkOrder workOrder6 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Nghiền thành bột", "Không tốt", line1);
        WorkOrder workOrder7 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Đóng gói", "Tốt", line1);

        WorkOrder workOrder8 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Rửa cá", "Tốt", line2);
        WorkOrder workOrder9 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Nghiền nhỏ", "Tốt", line2);
        WorkOrder workOrder10 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Nấu chín", "Không tốt", line2);
        WorkOrder workOrder11 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Lọc bỏ dầu", "Tốt", line2);
        WorkOrder workOrder12 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Sấy khô", "Tốt", line2);
        WorkOrder workOrder13 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Nghiền thành bột", "Tốt", line2);
        WorkOrder workOrder14 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Đóng gói", "Tốt", line2);

        WorkOrder workOrder15 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Rửa cá", "Tốt", line3);
        WorkOrder workOrder16 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Nghiền nhỏ", "Tốt", line3);
        WorkOrder workOrder17 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Nấu chín", "Tốt", line3);
        WorkOrder workOrder18 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Lọc bỏ dầu", "Tốt", line3);
        WorkOrder workOrder19 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Sấy khô", "Tốt", line3);
        WorkOrder workOrder20 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Nghiền thành bột", "Tốt", line3);
        WorkOrder workOrder21 = new WorkOrder(LocalDate.now().minusDays(10).toString(), "Đóng gói", "Tốt", line3);

        workOrderRepository.saveAll(List.of(
                workOrder1, workOrder2, workOrder3, workOrder4, workOrder5, workOrder6, workOrder7,
                workOrder8, workOrder9, workOrder10, workOrder11, workOrder12, workOrder13, workOrder14,
                workOrder15, workOrder16, workOrder17, workOrder18, workOrder19, workOrder20, workOrder21
        ));

        // Initialize Quality Controls
        QualityControl qc1 = new QualityControl("Nguyễn Thành Danh", "Tốt", line1,LocalDate.now().minusDays(10).toString(),false);
        QualityControl qc2 = new QualityControl("Vũ Đình Phúc", "Tốt", line2,LocalDate.now().minusDays(10).toString(),false);
        QualityControl qc3 = new QualityControl("Vũ Đình Phúc", "Tốt", line3,LocalDate.now().minusDays(10).toString(),false);
        qualityControlRepository.saveAll(List.of(qc1, qc2, qc3));
        // Initialize Packagings
        packagingService.savePackaging(new PackagingDTO(null, LocalDate.now().minusDays(10).toString(),"Nguyễn Thành Danh",("001"+LocalDate.now().minusDays(10)).replace("-",""),line1.getName(),"Tốt"));
        packagingService.savePackaging(new PackagingDTO(null, LocalDate.now().minusDays(10).toString(),"Nguyễn Thành Danh",("001"+LocalDate.now().minusDays(10)).replace("-",""),line1.getName(),"Tốt"));
        packagingService.savePackaging(new PackagingDTO(null, LocalDate.now().minusDays(10).toString(),"Nguyễn Thành Danh",("001"+LocalDate.now().minusDays(10)).replace("-",""),line1.getName(),"Tốt"));

        // Initialize Depreciations
        depreciationService.saveDepreciation(new DepreciationDTO(null,line1.getName(), 1, "Ngừng"));
        depreciationService.saveDepreciation(new DepreciationDTO(null,line2.getName(), 1, "Đang hoạt động"));
        depreciationService.saveDepreciation(new DepreciationDTO(null,line3.getName(), 1, "Đang hoạt động"));
    }
}
