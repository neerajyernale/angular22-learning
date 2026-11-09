import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee/employee';
import { Department } from './department/department';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './profile/profile';

@Component({
  imports: [RouterOutlet, Employee, Department, Dashboard, Profile],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular22-learning');
}
