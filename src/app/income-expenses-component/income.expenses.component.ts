import { Component, Input, OnChanges, SimpleChanges, Output, Renderer2, EventEmitter, ElementRef } from '@angular/core';
import { MoneyEventModel } from '../models/money.event.model';
import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';
import { NgForm, NgModel } from '@angular/forms';

@Component({
    selector: 'in-ex-comp',
    templateUrl: './income.expenses.component.html',
    styleUrls: ['./income.expenses.component.css'],
    animations: [
        trigger('visibleInvisible', [
            state('invisible', style({ opacity: 0 })),
            state('visible', style({ opacity: 1 })),
            transition('invisible <=> visible', [animate('0.2s')])
        ])
    ]
})
export class IncomeExpensesComponent implements OnChanges {

    @Input() curData: MoneyEventModel;
    @Output() amoundDeleted = new EventEmitter<number>();

    listOfIncomes: MoneyEventModel[] = [];
    listOfExpenses: MoneyEventModel[] = [];
    selectedElementId: number = -1;

    /**
     * When the binded to the parent, property 'curData' changes, add this new data to the respective list.
     * @param changes 
     */
    ngOnChanges(changes: SimpleChanges): void {
        if (this.curData != null && this.curData.amount != 0) {
            if (this.curData.amount > 0) {
                this.listOfIncomes.push(this.curData);
            }
            else if (this.curData.amount < 0) {
                this.listOfExpenses.push(this.curData);
            }
        }
    }

    /**
     * Set the 'isHovered' property of the element to true, when mouse is over the element.
     * @param element Element that the mouse is over.
     */
    mouseIsOverElement(element: MoneyEventModel) {
        element.isHovered = true;
    }

    /**
     * Set the 'isHovered' property of the element to false, when mouse left the element.
     * @param element Element that the mouse left.
     */
    mouseLeftElement(element: MoneyEventModel) {
        element.isHovered = false;
    }

    /**
     * Delete the selected element.
     * @param id The id of the element to delete.
     * @param event The event from the mouse.
     */
    deleteElement(id: string, event: MouseEvent) {
        event.stopPropagation();
        let index;
        let deletedItem;
        let itemNeeded = this.listOfIncomes.find(e => e.id.toString() == id) != null ? this.listOfIncomes.find(e => e.id.toString() == id) : this.listOfExpenses.find(e => e.id.toString() == id);

        if (this.listOfIncomes.find(e => e.id.toString() == id) != null) {
            index = this.listOfIncomes.indexOf(itemNeeded);
            deletedItem = this.listOfIncomes.splice(index, 1)[0];
        }
        else {
            index = this.listOfExpenses.indexOf(itemNeeded);
            deletedItem = this.listOfExpenses.splice(index, 1)[0];
        }

        this.amoundDeleted.emit(deletedItem.amount);
    }

    /**
     * Get the id of the selected element and store it in the component body.
     * @param id The id of the selected element.
     */
    setCurrentId(id: number) {
        this.selectedElementId = id;
    }

    /**
     * Edit the selected element.
     * @param amount New amount.
     * @param description New description.
     * @param form Form, from where the new information came.
     */
    editElement(amount: number, description: string, form: NgForm) {
        if (form.invalid) { return; }

        let amountDifference = 0;
        let elementNeeded = this.listOfIncomes.find(e => e.id == this.selectedElementId) != null ? this.listOfIncomes.find(e => e.id == this.selectedElementId) : this.listOfExpenses.find(e => e.id == this.selectedElementId);

        if (this.listOfIncomes.find(e => e.id == this.selectedElementId) != null) {
            if (amount <= 0) { return; }
            amountDifference = elementNeeded.amount - amount;
            elementNeeded.amount = amount;
            elementNeeded.description = description;
        }
        else {
            if (amount >= 0) { return; }
            amountDifference = elementNeeded.amount - amount;
            elementNeeded.amount = amount;
            elementNeeded.description = description;
        }

        this.amoundDeleted.emit(amountDifference)
        form.resetForm();
    }
}