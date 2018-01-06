import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';


@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() cityMessage: string;
  @Input() cityArray: Array<string>;
  @Input() studentAddMsg: string;

  @Output() addStudentEvent = new EventEmitter<Student>();
  @Output() sendMsgEvent = new EventEmitter<string>();

  student = new Student();
  childTitle = 'Child-one';
  message = 'Send Message';
  msg: string;

  addStudent() {
    this.addStudentEvent.emit(this.student);
  }

  sendMsg() {
    this.sendMsgEvent.emit(this.msg);
  }

}
