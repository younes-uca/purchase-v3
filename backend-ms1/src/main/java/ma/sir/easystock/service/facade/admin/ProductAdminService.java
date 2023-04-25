package ma.sir.easystock.service.facade.admin;

import java.util.List;
import ma.sir.easystock.bean.core.Product;
import ma.sir.easystock.dao.criteria.core.ProductCriteria;
import ma.sir.easystock.dao.criteria.history.ProductHistoryCriteria;
import ma.sir.easystock.zynerator.service.IService;

public interface ProductAdminService extends  IService<Product,ProductCriteria, ProductHistoryCriteria>  {

    Long getNextOrdre();



}
