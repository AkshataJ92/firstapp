import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { ArrdemoComponent } from './arrdemo/arrdemo.component';
import { TableComponent } from './table/table.component';
import { HighlighterDirective } from './highlighter.directive';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CardDirective } from './card.directive';
import { FilterPipe } from './filter.pipe';
import {routing} from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    ArrdemoComponent,
    TableComponent,
    HighlighterDirective,
    CreditcardComponent,
    CardDirective,
    FilterPipe,
    MenuComponent,
    PagenotfoundComponent
  ],
  imports: [BrowserModule,FormsModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
