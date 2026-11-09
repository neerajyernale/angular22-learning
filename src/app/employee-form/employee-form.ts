import { Component, effect, input, output, signal } from '@angular/core';
import { EmployeeRecord } from '../model/emp';
import { email, form, FormField, min, minLength, required } from '@angular/forms/signals';
import { Department } from '../department/department';

@Component({
  imports: [FormField],
  selector: 'app-employee-form',
  styleUrl: './employee-form.scss',
  templateUrl: './employee-form.html',
})
export class EmployeeForm {
employeeCreated = output<EmployeeRecord>();
employee = input<EmployeeRecord | null>(null);
employeeUpdated = output<EmployeeRecord>();
isInEditMode:boolean=false;
constructor(){
  effect(()=>{
    const selectedEmployee = this.employee();
    this.isInEditMode = selectedEmployee !== null;
    if(selectedEmployee){
        this.employeModel.set({
          name: selectedEmployee.name,
          email:selectedEmployee.email,
          department: selectedEmployee.department,
          designation:selectedEmployee.designation,
          salary:selectedEmployee.salary
        });

    }else{
      this.employeModel.set({
        name:'',
        email:'',
        department:'',
        designation:'',
        salary:0
      })
    }
  })
}

employeModel = signal({
  name:'',
  email:'',
  department:'',
  designation:'',
  salary:0
})

employForm = form(this.employeModel,path=>{
  required(path.name,{
    message:'Employee name is required'
  });
  minLength(path.name,3,{
    message:'Name must contain at least 3 charctres'
  });
  required(path.email,{
    message:'Email is required'
  });
  email(path.email,{
    message:'Please enter a valid email address'
  });
  required(path.department,{
    message:'please select the departrment'
  });
  required(path.designation,{
    message:'Designation is required'
  });
  min(path.salary,1,{
    message:'Salary mjust be greater than zero'
  })
})

//submit form
onSubmit():void{
  if(this.employForm().invalid()) return;

  const employee: EmployeeRecord = {
    id: Date.now(),
    ...this.employeModel(),
  };
  this.employeeCreated.emit(employee);
  
  
  this.employeModel.set({
    name: '',
    email: '',
    department: '',
    designation: '',
    salary: 0,
  });

}
onUpdate(){
  if(this.employForm().invalid()){
    return;
  }
  const selectUpdatatedemp = this.employee();
  if(selectUpdatatedemp){
    const updateEmp:EmployeeRecord={
      id:selectUpdatatedemp.id,
      ...this.employeModel()
    };
    this.employeeUpdated.emit(updateEmp);

    console.log(updateEmp);
  }
}
}
