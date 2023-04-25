import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';

import { ClientCreateAdminComponent } from './client-admin/create-admin/client-create-admin.component';
import { ClientEditAdminComponent } from './client-admin/edit-admin/client-edit-admin.component';
import { ClientViewAdminComponent } from './client-admin/view-admin/client-view-admin.component';
import { ClientListAdminComponent } from './client-admin/list-admin/client-list-admin.component';
import { ClientCategoryCreateAdminComponent } from './client-category-admin/create-admin/client-category-create-admin.component';
import { ClientCategoryEditAdminComponent } from './client-category-admin/edit-admin/client-category-edit-admin.component';
import { ClientCategoryViewAdminComponent } from './client-category-admin/view-admin/client-category-view-admin.component';
import { ClientCategoryListAdminComponent } from './client-category-admin/list-admin/client-category-list-admin.component';
import { ProductCreateAdminComponent } from './product-admin/create-admin/product-create-admin.component';
import { ProductEditAdminComponent } from './product-admin/edit-admin/product-edit-admin.component';
import { ProductViewAdminComponent } from './product-admin/view-admin/product-view-admin.component';
import { ProductListAdminComponent } from './product-admin/list-admin/product-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    ClientCreateAdminComponent,
    ClientListAdminComponent,
    ClientViewAdminComponent,
    ClientEditAdminComponent,
    ClientCategoryCreateAdminComponent,
    ClientCategoryListAdminComponent,
    ClientCategoryViewAdminComponent,
    ClientCategoryEditAdminComponent,
    ProductCreateAdminComponent,
    ProductListAdminComponent,
    ProductViewAdminComponent,
    ProductEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
  ],
  exports: [
  ClientCreateAdminComponent,
  ClientListAdminComponent,
  ClientViewAdminComponent,
  ClientEditAdminComponent,
  ClientCategoryCreateAdminComponent,
  ClientCategoryListAdminComponent,
  ClientCategoryViewAdminComponent,
  ClientCategoryEditAdminComponent,
  ProductCreateAdminComponent,
  ProductListAdminComponent,
  ProductViewAdminComponent,
  ProductEditAdminComponent,
  ],
  entryComponents: [],
})
export class CommunAdminModule { }