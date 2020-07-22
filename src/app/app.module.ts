import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header.component';
import { AddAmountComponent } from './add-amount-component/add.amount.component';
import { IncomeExpensesComponent } from './income-expenses-component/income.expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddAmountComponent,
    IncomeExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
