import {ClientCategoryCriteria} from './ClientCategoryCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ClientCriteria  extends   BaseCriteria  {

    public id: number;
    public fullName: string;
    public fullNameLike: string;
    public email: string;
    public emailLike: string;
  public clientCategory: ClientCategoryCriteria ;
  public clientCategorys: Array<ClientCategoryCriteria> ;

}
