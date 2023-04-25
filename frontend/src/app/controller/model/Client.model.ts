import {ClientCategoryDto} from './ClientCategory.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ClientDto  extends BaseDto{

    public id: number;
    public fullName: string;
    public email: string;
    public clientCategory: ClientCategoryDto ;

}
