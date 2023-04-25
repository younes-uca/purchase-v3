package ma.sir.easystock.service.facade.admin;

import java.util.List;
import ma.sir.easystock.bean.core.Purchase;
import ma.sir.easystock.dao.criteria.core.PurchaseCriteria;
import ma.sir.easystock.dao.criteria.history.PurchaseHistoryCriteria;
import ma.sir.easystock.zynerator.service.IService;

public interface PurchaseAdminService extends  IService<Purchase,PurchaseCriteria, PurchaseHistoryCriteria>  {

    List<Purchase> findByClientId(Long id);
    int deleteByClientId(Long id);



}
