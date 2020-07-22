import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MoneyEventModel } from '../models/money.event.model';

@Component({
    selector : 'header-comp',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})
export class HeaderComponent implements OnChanges{
    
    totalAmount: number = 0;
    @Input() amountToAppend : MoneyEventModel = new MoneyEventModel(0,0,"NaN");

    /**
     * When the binded to the parent, property 'amountToAppend' changes, add it to the total amount.
     * @param changes 
     */
    ngOnChanges(changes: SimpleChanges): void {
        this.totalAmount += this.amountToAppend.amount;
    }
}