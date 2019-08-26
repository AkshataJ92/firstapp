import {Routes, RouterModule} from  "@angular/router";
import { ArrdemoComponent } from './arrdemo/arrdemo.component';
import { Component } from '@angular/core';
import { CalcComponent } from './calc/calc.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { TableComponent } from './table/table.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const arr: Routes = [
  {path: "", component: ArrdemoComponent},
  {path: "calc", component: CalcComponent},
  {path: "creditcard", component:CreditcardComponent},
  {path: "table", component:TableComponent},
  {path: 'pagenotfound', component:PagenotfoundComponent},
  {path:'**',redirectTo:'pagenotfound'}
];

export const routing= RouterModule.forRoot(arr);
