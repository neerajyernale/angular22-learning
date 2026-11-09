import { computed, Injectable, signal } from '@angular/core';
import{EmployeeRecord} from '../model/emp'


@Injectable({ providedIn: 'root' })
export class Employee {
  employees = signal<EmployeeRecord[]>([
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      department: 'IT',
      designation: 'Angular Developer',
      salary: 50000
    },
    {
      id: 2,
      name: 'Priya Patil',
      email: 'priya@gmail.com',
      department: 'HR',
      designation: 'HR Manager',
      salary: 60000
    },
    {
      id: 3,
      name: 'Amit Verma',
      email: 'amit@gmail.com',
      department: 'IT',
      designation: 'Node Developer',
      salary: 55000
    }
  ]);
  //total emoplyees count
  totalEmployees = computed(()=>this.employees.length)

//Read functionality
  getEmployees():EmployeeRecord[]{
    return this.employees();
  }

  //create functionlity
  addEmployee(emp:EmployeeRecord){
    this.employees.update(oldemployees=>[
        ...oldemployees,
        emp
    ]);
  }

  //delete functionality
  deleteEmployee(id:number):void{
    this.employees.update(oldEmployee=>
        oldEmployee.filter(employee=>employee.id!==id)
    )
  }

  //updatefunctionality
  updateEmp( id:number,updateEmp:EmployeeRecord){
    this.employees.update(oldEmployee=>
        oldEmployee.map(employee=>employee.id ===id?updateEmp:employee)
    )
  }
   
}
