import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentTitle = 'Parent Component';

  //property for childone
  cityMsg = 'Indian Cities Names';
  cityArray = ['Bangalore', 'Mumbai', 'Hyderabad'];
  stdAddMsg = 'Add a Student';

  //property for childtwo
  stdMsg = 'Student Leader Detail';
  stdLeaderObj= new Student('Srivatsa', 'Shankaran')

  //property for parent component
  stdFullName = '';
  sum = '';
  msg = '';


  saveData(student) {
    this.stdFullName = student.fname + ' ' + student.lname;
  }

  printSum(res){
    this.sum = res;
  }

  printMsg(msg) {
    this.msg = msg;
  }
}
