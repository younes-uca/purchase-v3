package ma.sir.easystock.workflow.admin.process.purchase.save;
import ma.sir.easystock.service.facade.admin.PurchaseAdminService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PurchaseSaveAdminInjector{

    @Bean
    public PurchaseSaveAdminProcess purchaseSaveAdmin(PurchaseAdminService service, PurchaseSaveAdminConverter converter) {
        return new PurchaseSaveAdminProcessImpl(service,converter);
    }

}
