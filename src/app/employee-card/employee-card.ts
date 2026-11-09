import { Component, input, output } from '@angular/core';
import { EmployeeRecord } from '../model/emp';

@Component({
  imports: [],
  selector: 'app-employee-card',
  styleUrl: './employee-card.scss',
  templateUrl: './employee-card.html',
})

export class EmployeeCard {
  employees=input.required<EmployeeRecord[]>();
  editEmployee = output<EmployeeRecord>();
  removeEmployee = output<number>();

  onedit(emp:EmployeeRecord){
    this.editEmployee.emit(emp);
  }
 onRemove(id:number){
   this.removeEmployee.emit(id);
  }
}
