import {Component, OnInit} from '@angular/core';
import {PurchaseService} from 'src/app/controller/service/Purchase.service';
import {PurchaseDto} from 'src/app/controller/model/Purchase.model';
import {PurchaseCriteria} from 'src/app/controller/criteria/PurchaseCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ClientService } from 'src/app/controller/service/Client.service';

import {PurchaseItemDto} from 'src/app/controller/model/PurchaseItem.model';
import {ClientDto} from 'src/app/controller/model/Client.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-purchase-list-admin',
  templateUrl: './purchase-list-admin.component.html'
})
export class PurchaseListAdminComponent extends AbstractListController<PurchaseDto, PurchaseCriteria, PurchaseService>  implements OnInit {

    fileName = 'Purchase';

    clients :Array<ClientDto>;
  
    constructor(datePipe: DatePipe, purchaseService: PurchaseService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private clientService: ClientService) {
        super(datePipe, purchaseService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadClient();
    }

    public async loadPurchases(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Purchase', 'list');
        isPermistted ? this.service.findAll().subscribe(purchases => this.items = purchases,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'purchaseDate', header: 'Purchase date'},
            {field: 'total', header: 'Total'},
            {field: 'client?.fullName', header: 'Client'},
        ];
    }


    public async loadClient(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Purchase', 'list');
        isPermistted ? this.clientService.findAllOptimized().subscribe(clients => this.clients = clients,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: PurchaseDto) {
        if (res.purchaseItems != null) {
             res.purchaseItems.forEach(d => { d.purchase = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Purchase date': this.datePipe.transform(e.purchaseDate , 'dd/MM/yyyy hh:mm'),
                 'Total': e.total ,
                 'Description': e.description ,
                'Client': e.client?.fullName ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Purchase date Min': this.criteria.purchaseDateFrom ? this.datePipe.transform(this.criteria.purchaseDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Purchase date Max': this.criteria.purchaseDateTo ? this.datePipe.transform(this.criteria.purchaseDateTo , this.dateFormat) : environment.emptyForExport ,
            'Total Min': this.criteria.totalMin ? this.criteria.totalMin : environment.emptyForExport ,
            'Total Max': this.criteria.totalMax ? this.criteria.totalMax : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Client': this.criteria.client?.fullName ? this.criteria.client?.fullName : environment.emptyForExport ,
        }];
      }
}
