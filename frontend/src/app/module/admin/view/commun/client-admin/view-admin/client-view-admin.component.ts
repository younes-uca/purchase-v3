import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ClientService} from 'src/app/controller/service/Client.service';
import {ClientDto} from 'src/app/controller/model/Client.model';
import {ClientCriteria} from 'src/app/controller/criteria/ClientCriteria.model';

import {ClientCategoryDto} from 'src/app/controller/model/ClientCategory.model';
import {ClientCategoryService} from 'src/app/controller/service/ClientCategory.service';
@Component({
  selector: 'app-client-view-admin',
  templateUrl: './client-view-admin.component.html'
})
export class ClientViewAdminComponent extends AbstractViewController<ClientDto, ClientCriteria, ClientService> implements OnInit {


    constructor(private datePipe: DatePipe, private clientService: ClientService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private clientCategoryService: ClientCategoryService
    ){
        super(datePipe, clientService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.clientCategory = new ClientCategoryDto();
        this.clientCategoryService.findAll().subscribe((data) => this.clientCategorys = data);
    }


    get clientCategory(): ClientCategoryDto {
       return this.clientCategoryService.item;
    }
    set clientCategory(value: ClientCategoryDto) {
        this.clientCategoryService.item = value;
    }
    get clientCategorys():Array<ClientCategoryDto> {
       return this.clientCategoryService.items;
    }
    set clientCategorys(value: Array<ClientCategoryDto>) {
        this.clientCategoryService.items = value;
    }


}
