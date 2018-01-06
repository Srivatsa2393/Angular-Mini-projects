import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit {

  @Input() studentMsg: string;
  @Input() stdLeader: string;

  @Output() addNumberEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  childTitle = 'Child Two';
  addNumMsg = 'Add Number';
  num1 = '';
  num2 = '';

  addNumber() {
    this.addNumberEvent.emit(parseInt(this.num1) + parseInt(this.num2));
  }

}
