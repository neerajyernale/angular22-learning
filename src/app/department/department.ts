import { LowerCasePipe, NgClass,NgStyle, UpperCasePipe } from "@angular/common";
import { Component, signal } from "@angular/core";


@Component({
    selector:'app-department',
    templateUrl:'./department.html',
    styleUrl:'./department.scss',
    imports:[NgClass,NgStyle,UpperCasePipe,LowerCasePipe]
})

export class Department{
     showdata=false
     bgColor=signal('danger')
    employees =signal( [
    { id: 1, name: 'Rahul', role: 'Developer' },
    { id: 2, name: 'Amit', role: 'Tester' },
    { id: 3, name: 'Priya', role: 'HR Manager' }
  ]);
  isActive= signal(true);
  onActive(){
   this.showdata=true;
    
    this.employees.update(val=>[
        ...val,{
            id:Date.now(),
            name:'priya',
            role:'hr manager'
        },
    ]);
    
  }



    DepaetmentIt='Neeraj'
    isLoginedIn = signal(false);
    onLogin(){
        this.isLoginedIn.update(value=>!value)
    }

    Delete(id:number){
        let getIndex = this.employees().findIndex(e => e.id === id);
        this.employees().splice(getIndex,1);
    }
    
}