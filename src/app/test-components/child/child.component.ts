import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() hero: any;
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    //console.table(this.hero);


  }

  sendData() {
    let data = { name: 'abc', age: 26 };
    this.parentFunction.emit(data);
  }

}
