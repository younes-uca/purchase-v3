import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PurchaseDto} from '../model/Purchase.model';
import {PurchaseCriteria} from '../criteria/PurchaseCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {PurchaseItemDto} from '../model/PurchaseItem.model';
import {ClientDto} from '../model/Client.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends AbstractService<PurchaseDto, PurchaseCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/purchase/');
    }

    public constrcutDto(): PurchaseDto {
        return new PurchaseDto();
    }

    public constrcutCriteria(): PurchaseCriteria {
        return new PurchaseCriteria();
    }
}
