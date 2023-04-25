package ma.sir.easystock.workflow.admin.process.purchase.save;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ma.sir.easystock.zynerator.util.ListUtil;


import ma.sir.easystock.ws.converter.PurchaseItemConverter;
import ma.sir.easystock.ws.converter.ClientConverter;
import ma.sir.easystock.ws.converter.ProductConverter;
import ma.sir.easystock.zynerator.util.StringUtil;
import ma.sir.easystock.zynerator.process.AbstractProcessConverter;
import ma.sir.easystock.zynerator.util.DateUtil;
import ma.sir.easystock.bean.core.Purchase;

@Component
public class PurchaseSaveAdminConverter extends AbstractProcessConverter<PurchaseSaveAdminInput,PurchaseSaveAdminOutput,Purchase> {

    @Autowired
    private PurchaseItemConverter purchaseItemConverter ;
    @Autowired
    private ClientConverter clientConverter ;
    @Autowired
    private ProductConverter productConverter ;
    private boolean client;
    private boolean purchaseItems;

    public PurchaseSaveAdminConverter(){
        super(Purchase.class, PurchaseSaveAdminInput.class, PurchaseSaveAdminOutput.class);
    }

    @Override
    public Purchase toItem(PurchaseSaveAdminInput input) {
        if (input == null) {
            return null;
        } else {
            Purchase item = new Purchase();
            if(StringUtil.isNotEmpty(input.getId()))
                item.setId(input.getId());
            if(StringUtil.isNotEmpty(input.getReference()))
                item.setReference(input.getReference());
            if(StringUtil.isNotEmpty(input.getPurchaseDate()))
                item.setPurchaseDate(DateUtil.stringEnToDate(input.getPurchaseDate()));
            if(StringUtil.isNotEmpty(input.getTotal()))
                item.setTotal(input.getTotal());
            if(StringUtil.isNotEmpty(input.getDescription()))
                item.setDescription(input.getDescription());
            if(this.client && input.getClient()!=null)
                item.setClient(clientConverter.toItem(input.getClient())) ;


            if(this.purchaseItems && ListUtil.isNotEmpty(input.getPurchaseItems()))
                item.setPurchaseItems(purchaseItemConverter.toItem(input.getPurchaseItems()));

        return item;
        }
    }

    @Override
    public PurchaseSaveAdminOutput toOutput(Purchase item) {
        if (item == null) {
            return null;
        } else {
            PurchaseSaveAdminOutput output = new PurchaseSaveAdminOutput();
            if(StringUtil.isNotEmpty(item.getId()))
                output.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getReference()))
                output.setReference(item.getReference());
            if(item.getPurchaseDate()!=null)
                output.setPurchaseDate(DateUtil.dateTimeToString(item.getPurchaseDate()));
            if(StringUtil.isNotEmpty(item.getTotal()))
                output.setTotal(item.getTotal());
            if(StringUtil.isNotEmpty(item.getDescription()))
                output.setDescription(item.getDescription());
            if(this.client && item.getClient()!=null) {
                output.setClient(clientConverter.toDto(item.getClient())) ;
    }
        if(this.purchaseItems && ListUtil.isNotEmpty(item.getPurchaseItems())){
            purchaseItemConverter.init(true);
            purchaseItemConverter.setPurchase(false);
            output.setPurchaseItems(purchaseItemConverter.toDto(item.getPurchaseItems()));
            purchaseItemConverter.setPurchase(true);

        }
        return output;
    }
}



    public PurchaseItemConverter getPurchaseItemConverter(){
        return this.purchaseItemConverter;
    }
    public void setPurchaseItemConverter(PurchaseItemConverter purchaseItemConverter ){
        this.purchaseItemConverter = purchaseItemConverter;
    }
    public ClientConverter getClientConverter(){
        return this.clientConverter;
    }
    public void setClientConverter(ClientConverter clientConverter ){
        this.clientConverter = clientConverter;
    }
    public ProductConverter getProductConverter(){
        return this.productConverter;
    }
    public void setProductConverter(ProductConverter productConverter ){
        this.productConverter = productConverter;
    }


    public boolean  isClient(){
        return this.client;
    }
    public void  setClient(boolean client){
        this.client = client;
    }
    public boolean  isPurchaseItems(){
        return this.purchaseItems ;
    }
    public void  setPurchaseItems(boolean purchaseItems ){
        this.purchaseItems  = purchaseItems ;
    }
}
