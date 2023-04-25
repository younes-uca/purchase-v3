package ma.sir.easystock.service.facade.admin;

import java.util.List;
import ma.sir.easystock.bean.core.Client;
import ma.sir.easystock.dao.criteria.core.ClientCriteria;
import ma.sir.easystock.dao.criteria.history.ClientHistoryCriteria;
import ma.sir.easystock.zynerator.service.IService;

public interface ClientAdminService extends  IService<Client,ClientCriteria, ClientHistoryCriteria>  {

    List<Client> findByClientCategoryId(Long id);
    int deleteByClientCategoryId(Long id);



}
