package ma.sir.easystock.service.facade.admin;

import java.util.List;
import ma.sir.easystock.bean.core.PurchaseItem;
import ma.sir.easystock.dao.criteria.core.PurchaseItemCriteria;
import ma.sir.easystock.dao.criteria.history.PurchaseItemHistoryCriteria;
import ma.sir.easystock.zynerator.service.IService;

public interface PurchaseItemAdminService extends  IService<PurchaseItem,PurchaseItemCriteria, PurchaseItemHistoryCriteria>  {

    List<PurchaseItem> findByProductId(Long id);
    int deleteByProductId(Long id);
    List<PurchaseItem> findByPurchaseId(Long id);
    int deleteByPurchaseId(Long id);



}
