import { Component, Inject, Injectable } from '@angular/core';
import { UpperCasePipe,LowerCasePipe } from '@angular/common';
import { Employee as EmployeeService } from '../services/employee';

@Component({
  imports: [UpperCasePipe,LowerCasePipe],
  selector: 'app-employee',
  styleUrl: './employee.scss',
  templateUrl: './employee.html',
})
export class Employee {
  employeeName = 'Neeraj';
  employeeRole='Angular Developer';
  experince=3;

  constructor(private service:EmployeeService){

  }
}
