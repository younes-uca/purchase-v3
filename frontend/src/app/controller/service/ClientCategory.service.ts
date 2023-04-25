import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ClientCategoryDto} from '../model/ClientCategory.model';
import {ClientCategoryCriteria} from '../criteria/ClientCategoryCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ClientCategoryService extends AbstractService<ClientCategoryDto, ClientCategoryCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/clientCategory/');
    }

    public constrcutDto(): ClientCategoryDto {
        return new ClientCategoryDto();
    }

    public constrcutCriteria(): ClientCategoryCriteria {
        return new ClientCategoryCriteria();
    }
}
