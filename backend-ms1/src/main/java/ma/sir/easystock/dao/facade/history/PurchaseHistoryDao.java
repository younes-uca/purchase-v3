package ma.sir.easystock.dao.facade.history;

import ma.sir.easystock.zynerator.repository.AbstractHistoryRepository;
import ma.sir.easystock.bean.history.PurchaseHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseHistoryDao extends AbstractHistoryRepository<PurchaseHistory,Long> {

}
