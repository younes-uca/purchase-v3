import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ClientCategoryService} from 'src/app/controller/service/ClientCategory.service';
import {ClientCategoryDto} from 'src/app/controller/model/ClientCategory.model';
import {ClientCategoryCriteria} from 'src/app/controller/criteria/ClientCategoryCriteria.model';
@Component({
  selector: 'app-client-category-create-admin',
  templateUrl: './client-category-create-admin.component.html'
})
export class ClientCategoryCreateAdminComponent extends AbstractCreateController<ClientCategoryDto, ClientCategoryCriteria, ClientCategoryService>  implements OnInit {



   private _validClientCategoryReference = true;
   private _validClientCategoryCode = true;

    constructor(private datePipe: DatePipe, private clientCategoryService: ClientCategoryService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, clientCategoryService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validClientCategoryReference = value;
        this.validClientCategoryCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateClientCategoryReference();
        this.validateClientCategoryCode();
    }

    public validateClientCategoryReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validClientCategoryReference = false;
        } else {
            this.validClientCategoryReference = true;
        }
    }
    public validateClientCategoryCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validClientCategoryCode = false;
        } else {
            this.validClientCategoryCode = true;
        }
    }






    get validClientCategoryReference(): boolean {
        return this._validClientCategoryReference;
    }

    set validClientCategoryReference(value: boolean) {
         this._validClientCategoryReference = value;
    }
    get validClientCategoryCode(): boolean {
        return this._validClientCategoryCode;
    }

    set validClientCategoryCode(value: boolean) {
         this._validClientCategoryCode = value;
    }



}
