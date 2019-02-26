import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {FilteredTextBoxComponent} from './customers-list/filterTextbox.component'


@NgModule({
    declarations: [
      CustomersComponent,CustomersListComponent,FilteredTextBoxComponent
    ],
    imports: [
    ],
   exports: [CustomersComponent]
  })
  export class CustomersModule { }