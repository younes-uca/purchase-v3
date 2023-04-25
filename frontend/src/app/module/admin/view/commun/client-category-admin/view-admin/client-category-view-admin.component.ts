import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ClientCategoryService} from 'src/app/controller/service/ClientCategory.service';
import {ClientCategoryDto} from 'src/app/controller/model/ClientCategory.model';
import {ClientCategoryCriteria} from 'src/app/controller/criteria/ClientCategoryCriteria.model';

@Component({
  selector: 'app-client-category-view-admin',
  templateUrl: './client-category-view-admin.component.html'
})
export class ClientCategoryViewAdminComponent extends AbstractViewController<ClientCategoryDto, ClientCategoryCriteria, ClientCategoryService> implements OnInit {


    constructor(private datePipe: DatePipe, private clientCategoryService: ClientCategoryService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, clientCategoryService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
