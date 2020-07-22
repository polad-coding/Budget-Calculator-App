import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoneyEventModel } from '../models/money.event.model';

@Component({
    selector: 'add-amount-comp',
    templateUrl: './add.amount.component.html',
    styleUrls: ['./add.amount.component.css']
})
export class AddAmountComponent {

    @Output() data: EventEmitter<NgForm> = new EventEmitter<NgForm>();

    /**
     * When form is submited send the data to the parent's method and reset the form.
     * @param form 
     */
    Submit(form: NgForm) {
        this.data.emit(form);
        form.resetForm();
    }
}