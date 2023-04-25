import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PurchaseItemDto} from '../model/PurchaseItem.model';
import {PurchaseItemCriteria} from '../criteria/PurchaseItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {PurchaseDto} from '../model/Purchase.model';
import {ProductDto} from '../model/Product.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseItemService extends AbstractService<PurchaseItemDto, PurchaseItemCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/purchaseItem/');
    }

    public constrcutDto(): PurchaseItemDto {
        return new PurchaseItemDto();
    }

    public constrcutCriteria(): PurchaseItemCriteria {
        return new PurchaseItemCriteria();
    }
}
