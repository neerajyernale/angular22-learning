import { Component, signal } from '@angular/core';
import { Employee as EmployeeService } from '../services/employee';
import { EmployeeRecord } from '../model/emp';
import { EmployeeForm } from '../employee-form/employee-form';
import { EmployeeCard } from '../employee-card/employee-card';

@Component({
  imports: [EmployeeForm, EmployeeCard],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  constructor(public readonly EmployeeService: EmployeeService) {}

  selectedEmployee = signal<EmployeeRecord | null>(null);
  empCreated(employee:EmployeeRecord){
    this.EmployeeService.addEmployee(employee)

  }
  editemp(emp:EmployeeRecord):void{
    this.selectedEmployee.set(emp);
    console.log(emp);
  }
  empUpdate(employee:EmployeeRecord):void{
    this.EmployeeService.updateEmp(employee.id,employee);
    console.log(employee);
    this.selectedEmployee.set(null)
  }
  removeemp(id:number){
    this.EmployeeService.deleteEmployee(id);
    if(this.selectedEmployee()?.id === id){
      this.selectedEmployee.set(null);
    }
  }
}
