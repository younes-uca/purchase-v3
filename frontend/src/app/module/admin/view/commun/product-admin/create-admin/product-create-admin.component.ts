import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ProductService} from 'src/app/controller/service/Product.service';
import {ProductDto} from 'src/app/controller/model/Product.model';
import {ProductCriteria} from 'src/app/controller/criteria/ProductCriteria.model';
@Component({
  selector: 'app-product-create-admin',
  templateUrl: './product-create-admin.component.html'
})
export class ProductCreateAdminComponent extends AbstractCreateController<ProductDto, ProductCriteria, ProductService>  implements OnInit {



   private _validProductCode = true;
   private _validProductReference = true;

    constructor(private datePipe: DatePipe, private productService: ProductService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, productService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validProductCode = value;
        this.validProductReference = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateProductCode();
        this.validateProductReference();
    }

    public validateProductCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validProductCode = false;
        } else {
            this.validProductCode = true;
        }
    }
    public validateProductReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validProductReference = false;
        } else {
            this.validProductReference = true;
        }
    }






    get validProductCode(): boolean {
        return this._validProductCode;
    }

    set validProductCode(value: boolean) {
         this._validProductCode = value;
    }
    get validProductReference(): boolean {
        return this._validProductReference;
    }

    set validProductReference(value: boolean) {
         this._validProductReference = value;
    }



}
