import { Component } from '@angular/core';
import { Employee as EmployeeService } from '../services/employee';

@Component({
  imports: [],
  selector: 'app-profile',
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})
export class Profile {
employeeService: any;

  constructor(private service:EmployeeService){}
}
