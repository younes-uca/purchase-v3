package  ma.sir.easystock.ws.facade.admin;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.sir.easystock.bean.core.Purchase;
import ma.sir.easystock.bean.history.PurchaseHistory;
import ma.sir.easystock.dao.criteria.core.PurchaseCriteria;
import ma.sir.easystock.dao.criteria.history.PurchaseHistoryCriteria;
import ma.sir.easystock.service.facade.admin.PurchaseAdminService;
import ma.sir.easystock.ws.converter.PurchaseConverter;
import ma.sir.easystock.ws.dto.PurchaseDto;
import ma.sir.easystock.zynerator.controller.AbstractController;
import ma.sir.easystock.zynerator.dto.AuditEntityDto;
import ma.sir.easystock.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.sir.easystock.zynerator.process.Result;
import ma.sir.easystock.workflow.admin.process.purchase.save.PurchaseSaveAdminProcess ;
import ma.sir.easystock.workflow.admin.process.purchase.save.PurchaseSaveAdminInput ;
import ma.sir.easystock.workflow.admin.process.purchase.save.PurchaseSaveAdminOutput ;
import ma.sir.easystock.workflow.admin.process.purchase.delete.PurchaseDeleteAdminProcess ;
import ma.sir.easystock.workflow.admin.process.purchase.delete.PurchaseDeleteAdminInput ;
import ma.sir.easystock.workflow.admin.process.purchase.delete.PurchaseDeleteAdminOutput ;

import org.springframework.web.multipart.MultipartFile;
import ma.sir.easystock.zynerator.dto.FileTempDto;

@Api("Manages purchase services")
@RestController
@RequestMapping("/api/admin/purchase/")
public class PurchaseRestAdmin  extends AbstractController<Purchase, PurchaseDto, PurchaseHistory, PurchaseCriteria, PurchaseHistoryCriteria, PurchaseAdminService, PurchaseConverter> {

    @ApiOperation("save a purchase")
    @PostMapping("process/save")
    public ResponseEntity<Result<PurchaseSaveAdminInput,PurchaseSaveAdminOutput, Purchase>> saveProcess(@RequestBody PurchaseSaveAdminInput input) throws Exception {
        Result<PurchaseSaveAdminInput, PurchaseSaveAdminOutput, Purchase> result = purchaseSaveAdminProcess.execute(input);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("delete a purchase")
    @PostMapping("process/delete")
    public ResponseEntity<Result<PurchaseDeleteAdminInput,PurchaseDeleteAdminOutput, Purchase>> deleteProcess(@RequestBody PurchaseDeleteAdminInput input) throws Exception {
        Result<PurchaseDeleteAdminInput, PurchaseDeleteAdminOutput, Purchase> result = purchaseDeleteAdminProcess.execute(input);
        return new ResponseEntity<>(result, result.getStatus());
    }


    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all purchases")
    @GetMapping("")
    public ResponseEntity<List<PurchaseDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all purchases")
    @GetMapping("optimized")
    public ResponseEntity<List<PurchaseDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a purchase by id")
    @GetMapping("id/{id}")
    public ResponseEntity<PurchaseDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  purchase")
    @PostMapping("")
    public ResponseEntity<PurchaseDto> save(@RequestBody PurchaseDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  purchase")
    @PutMapping("")
    public ResponseEntity<PurchaseDto> update(@RequestBody PurchaseDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of purchase")
    @PostMapping("multiple")
    public ResponseEntity<List<PurchaseDto>> delete(@RequestBody List<PurchaseDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified purchase")
    @DeleteMapping("")
    public ResponseEntity<PurchaseDto> delete(@RequestBody PurchaseDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified purchase")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple purchases by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("find by client id")
    @GetMapping("client/id/{id}")
    public List<Purchase> findByClientId(@PathVariable Long id){
        return service.findByClientId(id);
    }
    @ApiOperation("delete by client id")
    @DeleteMapping("client/id/{id}")
    public int deleteByClientId(@PathVariable Long id){
        return service.deleteByClientId(id);
    }
    @ApiOperation("Finds a purchase and associated list by id")
    @GetMapping("detail/id/{id}")
    public ResponseEntity<PurchaseDto> findWithAssociatedLists(@PathVariable Long id) {
        return super.findWithAssociatedLists(id);
    }

    @ApiOperation("Finds purchases by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<PurchaseDto>> findByCriteria(@RequestBody PurchaseCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated purchases by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody PurchaseCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports purchases by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody PurchaseCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets purchase data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody PurchaseCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets purchase history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets purchase paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody PurchaseHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports purchase history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody PurchaseHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets purchase history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody PurchaseHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public PurchaseRestAdmin (PurchaseAdminService service, PurchaseConverter converter) {
        super(service, converter);
    }

    @Autowired
    private PurchaseSaveAdminProcess purchaseSaveAdminProcess;
    @Autowired
    private PurchaseDeleteAdminProcess purchaseDeleteAdminProcess;

}