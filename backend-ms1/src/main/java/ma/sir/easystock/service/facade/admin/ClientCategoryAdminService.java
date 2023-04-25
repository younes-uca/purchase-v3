package ma.sir.easystock.service.facade.admin;

import java.util.List;
import ma.sir.easystock.bean.core.ClientCategory;
import ma.sir.easystock.dao.criteria.core.ClientCategoryCriteria;
import ma.sir.easystock.dao.criteria.history.ClientCategoryHistoryCriteria;
import ma.sir.easystock.zynerator.service.IService;

public interface ClientCategoryAdminService extends  IService<ClientCategory,ClientCategoryCriteria, ClientCategoryHistoryCriteria>  {




}
