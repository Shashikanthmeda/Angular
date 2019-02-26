import {Component, OnInit} from '@angular/core'
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
    selector: 'app-cusomers-list',
    templateUrl: './customers-list.component.html'
})

export class CustomersListComponent implements OnInit{
    
    filteredCustomers: any[] = [];
    customersOrderTotal: number;
    currencycode:string = 'USD';
    
    constructor(){}
    
    ngOnInit(){}
}