package  ma.sir.easystock.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.sir.easystock.bean.core.Purchase;

import ma.sir.easystock.zynerator.util.StringUtil;
import ma.sir.easystock.zynerator.converter.AbstractConverter;
import ma.sir.easystock.zynerator.util.DateUtil;
import ma.sir.easystock.bean.history.PurchaseItemHistory;
import ma.sir.easystock.bean.core.PurchaseItem;
import ma.sir.easystock.ws.dto.PurchaseItemDto;

@Component
public class PurchaseItemConverter extends AbstractConverter<PurchaseItem, PurchaseItemDto, PurchaseItemHistory> {

    @Autowired
    private PurchaseConverter purchaseConverter ;
    @Autowired
    private ProductConverter productConverter ;
    private boolean product;
    private boolean purchase;

    public  PurchaseItemConverter(){
        super(PurchaseItem.class, PurchaseItemDto.class, PurchaseItemHistory.class);
    }

    @Override
    public PurchaseItem toItem(PurchaseItemDto dto) {
        if (dto == null) {
            return null;
        } else {
        PurchaseItem item = new PurchaseItem();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getPrice()))
                item.setPrice(dto.getPrice());
            if(StringUtil.isNotEmpty(dto.getQuantity()))
                item.setQuantity(dto.getQuantity());
            if(this.product && dto.getProduct()!=null)
                item.setProduct(productConverter.toItem(dto.getProduct())) ;

            if(dto.getPurchase() != null && dto.getPurchase().getId() != null){
                item.setPurchase(new Purchase());
                item.getPurchase().setId(dto.getPurchase().getId());
            }



        return item;
        }
    }

    @Override
    public PurchaseItemDto toDto(PurchaseItem item) {
        if (item == null) {
            return null;
        } else {
            PurchaseItemDto dto = new PurchaseItemDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getPrice()))
                dto.setPrice(item.getPrice());
            if(StringUtil.isNotEmpty(item.getQuantity()))
                dto.setQuantity(item.getQuantity());
        if(this.product && item.getProduct()!=null) {
            dto.setProduct(productConverter.toDto(item.getProduct())) ;
        }
        if(this.purchase && item.getPurchase()!=null) {
            dto.setPurchase(purchaseConverter.toDto(item.getPurchase())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.product = value;
        this.purchase = value;
    }


    public PurchaseConverter getPurchaseConverter(){
        return this.purchaseConverter;
    }
    public void setPurchaseConverter(PurchaseConverter purchaseConverter ){
        this.purchaseConverter = purchaseConverter;
    }
    public ProductConverter getProductConverter(){
        return this.productConverter;
    }
    public void setProductConverter(ProductConverter productConverter ){
        this.productConverter = productConverter;
    }
    public boolean  isProduct(){
        return this.product;
    }
    public void  setProduct(boolean product){
        this.product = product;
    }
    public boolean  isPurchase(){
        return this.purchase;
    }
    public void  setPurchase(boolean purchase){
        this.purchase = purchase;
    }
}
