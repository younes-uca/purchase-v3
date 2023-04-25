package ma.sir.easystock.service.impl.admin;

import ma.sir.easystock.bean.core.ClientCategory;
import ma.sir.easystock.bean.history.ClientCategoryHistory;
import ma.sir.easystock.dao.criteria.core.ClientCategoryCriteria;
import ma.sir.easystock.dao.criteria.history.ClientCategoryHistoryCriteria;
import ma.sir.easystock.dao.facade.core.ClientCategoryDao;
import ma.sir.easystock.dao.facade.history.ClientCategoryHistoryDao;
import ma.sir.easystock.dao.specification.core.ClientCategorySpecification;
import ma.sir.easystock.service.facade.admin.ClientCategoryAdminService;
import ma.sir.easystock.zynerator.service.AbstractServiceImpl;
import ma.sir.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class ClientCategoryAdminServiceImpl extends AbstractServiceImpl<ClientCategory,ClientCategoryHistory, ClientCategoryCriteria, ClientCategoryHistoryCriteria, ClientCategoryDao,
ClientCategoryHistoryDao> implements ClientCategoryAdminService {


    public ClientCategory findByReferenceEntity(ClientCategory t){
        return  dao.findByCode(t.getCode());
    }


    public void configure() {
        super.configure(ClientCategory.class,ClientCategoryHistory.class, ClientCategoryHistoryCriteria.class, ClientCategorySpecification.class);
    }

    public ClientCategoryAdminServiceImpl(ClientCategoryDao dao, ClientCategoryHistoryDao historyDao) {
        super(dao, historyDao);
    }

}