import { Component } from '@angular/core';
import { MoneyEventModel } from './models/money.event.model';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Budget-Angular-App';
  data: MoneyEventModel = new MoneyEventModel(0, 0, "NaN");
  amountToRemove: MoneyEventModel = new MoneyEventModel(0, 0, "NaN");
  currentElementId: number = 0;

  /**
   * Get the element data from the add-amount component, create this element and pass it to the income-expenses component. 
   * @param data Element data.
   */
  receiveData(data: NgForm) {
    this.data = new MoneyEventModel(this.currentElementId++, data.value.amount, data.value.description);
  }

  /**
   * When the element is deleted, get the amount that must be added or removed and pass it to the header component.
   * @param amount Amount to be added or removed.
   */
  removeAmount(amount: number) {
    this.amountToRemove = new MoneyEventModel(0, amount * -1, "NaN");
  }
}
