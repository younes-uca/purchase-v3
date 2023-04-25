import {PurchaseDto} from './Purchase.model';
import {ProductDto} from './Product.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PurchaseItemDto  extends BaseDto{

    public id: number;
    public price: number;
    public quantity: number;
    public priceMax: string ;
    public priceMin: string ;
    public quantityMax: string ;
    public quantityMin: string ;
    public product: ProductDto ;
    public purchase: PurchaseDto ;

}
