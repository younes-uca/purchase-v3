package ma.sir.easystock.service.impl.admin;

import ma.sir.easystock.bean.core.PurchaseItem;
import ma.sir.easystock.bean.history.PurchaseItemHistory;
import ma.sir.easystock.dao.criteria.core.PurchaseItemCriteria;
import ma.sir.easystock.dao.criteria.history.PurchaseItemHistoryCriteria;
import ma.sir.easystock.dao.facade.core.PurchaseItemDao;
import ma.sir.easystock.dao.facade.history.PurchaseItemHistoryDao;
import ma.sir.easystock.dao.specification.core.PurchaseItemSpecification;
import ma.sir.easystock.service.facade.admin.PurchaseItemAdminService;
import ma.sir.easystock.zynerator.service.AbstractServiceImpl;
import ma.sir.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.sir.easystock.service.facade.admin.PurchaseAdminService ;
import ma.sir.easystock.service.facade.admin.ProductAdminService ;


import java.util.List;
@Service
public class PurchaseItemAdminServiceImpl extends AbstractServiceImpl<PurchaseItem,PurchaseItemHistory, PurchaseItemCriteria, PurchaseItemHistoryCriteria, PurchaseItemDao,
PurchaseItemHistoryDao> implements PurchaseItemAdminService {



    public List<PurchaseItem> findByProductId(Long id){
        return dao.findByProductId(id);
    }
    public int deleteByProductId(Long id){
        return dao.deleteByProductId(id);
    }
    public List<PurchaseItem> findByPurchaseId(Long id){
        return dao.findByPurchaseId(id);
    }
    public int deleteByPurchaseId(Long id){
        return dao.deleteByPurchaseId(id);
    }

    public void configure() {
        super.configure(PurchaseItem.class,PurchaseItemHistory.class, PurchaseItemHistoryCriteria.class, PurchaseItemSpecification.class);
    }

    @Autowired
    private PurchaseAdminService purchaseService ;
    @Autowired
    private ProductAdminService productService ;
    public PurchaseItemAdminServiceImpl(PurchaseItemDao dao, PurchaseItemHistoryDao historyDao) {
        super(dao, historyDao);
    }

}