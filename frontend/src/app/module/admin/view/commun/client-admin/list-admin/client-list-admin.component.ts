import {Component, OnInit} from '@angular/core';
import {ClientService} from 'src/app/controller/service/Client.service';
import {ClientDto} from 'src/app/controller/model/Client.model';
import {ClientCriteria} from 'src/app/controller/criteria/ClientCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ClientCategoryService } from 'src/app/controller/service/ClientCategory.service';

import {ClientCategoryDto} from 'src/app/controller/model/ClientCategory.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-client-list-admin',
  templateUrl: './client-list-admin.component.html'
})
export class ClientListAdminComponent extends AbstractListController<ClientDto, ClientCriteria, ClientService>  implements OnInit {

    fileName = 'Client';

    clientCategorys :Array<ClientCategoryDto>;
  
    constructor(datePipe: DatePipe, clientService: ClientService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private clientCategoryService: ClientCategoryService) {
        super(datePipe, clientService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadClientCategory();
    }

    public async loadClients(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Client', 'list');
        isPermistted ? this.service.findAll().subscribe(clients => this.items = clients,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'fullName', header: 'Full name'},
            {field: 'email', header: 'Email'},
            {field: 'clientCategory?.reference', header: 'Client category'},
        ];
    }


    public async loadClientCategory(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Client', 'list');
        isPermistted ? this.clientCategoryService.findAllOptimized().subscribe(clientCategorys => this.clientCategorys = clientCategorys,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ClientDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Full name': e.fullName ,
                 'Email': e.email ,
                'Client category': e.clientCategory?.reference ,
            }
        });

        this.criteriaData = [{
            'Full name': this.criteria.fullName ? this.criteria.fullName : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
        //'Client category': this.criteria.clientCategory?.reference ? this.criteria.clientCategory?.reference : environment.emptyForExport ,
        }];
      }
}
