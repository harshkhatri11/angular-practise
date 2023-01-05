import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasharing-template-test',
  templateUrl: './datasharing-template-test.component.html',
  styleUrls: ['./datasharing-template-test.component.scss']
})
export class DatasharingTemplateTestComponent implements OnInit {

  nameFromChild: string = '';
  data =
    {
      name: "xyz",
      age: 30,
      email: "xyz@gmail.com"
    }




  constructor() { }

  ngOnInit(): void {
  }

  parentFunction(res: any) {
    this.nameFromChild = res.name;
    console.log(res);
  }

}
