import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';
import { EmployeeService } from 'src/app/applications-components/employee-management/employee.service';
import { ServiceService } from 'src/app/service.service';
import { GlobalConstants } from '../../../shared/global-constants';
//const { faker } = require('@faker-js/faker');


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  onAddProduct = new EventEmitter();
  onEditProduct = new EventEmitter();
  employeeForm: any = FormGroup;
  dialogAction: any = "Add";
  action: any = "Add";
  gender: string = "";
  genders: string[] = ['Male', 'Female', 'Transgender', 'Others'];
  employmentType: string[] = ['Full-time', 'Part-time', 'Intern', 'Contract', 'Probation'];
  employeeStatus: string[] = ['Active', 'In-active'];
  emp_status: string = "";
  avatarImg: string = "";
  result: boolean = false;
  today = new Date();

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EmployeeComponent>,
    private employeeService: EmployeeService,
    private serviceService: ServiceService
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      firstName: [null, [Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      lastName: [null, [Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      sex: [null, Validators.required],
      birthday: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      avatar: [null],
      phone: [null, [Validators.required]],
      address: [null, Validators.required],
      address_2: [null, Validators.required],
      state: [null, Validators.required],
      zip_code: [null, [Validators.required]],
      city: [null, Validators.required],
      country: [null, Validators.required],
      employment_id: [null, Validators.required],
      job_title: [null, Validators.required],
      employment_type: [null, Validators.required],
      employment_status: [null, Validators.required],
      joining_date: [null, Validators.required]
    });

    setTimeout(() => {
      this.avatarImg = this.employeeForm.value['avatar'];
    }, 300);

    if (this.dialogData.action == 'Edit') {
      this.dialogAction = "Edit";
      this.action = "Update";
      this.employeeForm.patchValue(this.dialogData.data);
    }
  }

  handleSubmit() {
    if (this.dialogAction === "Edit") {
      this.result = true;
      this.edit();
    } else {
      this.add();
    }
  }

  add() {
    let formData = this.employeeForm.value;
    let avatar_img_formate = `https://ui-avatars.com/api/?name=${formData.firstName}+${formData.lastName}`
    let data = {
      id: faker.datatype.uuid(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      sex: formData.sex,
      birthday: formData.birthday,
      email: formData.email,
      avatar: avatar_img_formate,
      phone: formData.phone,
      address: formData.address,
      address_2: formData.address_2,
      state: formData.state,
      zip_code: formData.zip_code,
      city: formData.city,
      country: formData.country,
      employment_id: formData.employment_id,
      job_title: formData.job_title,
      employment_type: formData.employment_type,
      employment_status: formData.employment_status,
      joining_date: formData.joining_date

    }
    this.employeeService.addEmployee(JSON.stringify(data)).subscribe((response: any) => {
      this.dialogRef.close();
      this.onAddProduct.emit();
      this.serviceService.openSuccessSnackBar("Employee added successfully", "Ok");
    }, (error: any) => {
      this.serviceService.openFailureSnackBar("Something went wrong", "Try again");
    })
  }

  edit() {
    let formData = this.employeeForm.value;
    let data = {
      id: this.dialogData.data.id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      sex: formData.sex,
      birthday: formData.birthday,
      email: formData.email,
      avatar: formData.avatar,
      phone: formData.phone,
      address: formData.address,
      address_2: formData.address_2,
      state: formData.state,
      zip_code: formData.zip_code,
      city: formData.city,
      country: formData.country,
      employment_id: formData.employment_id,
      job_title: formData.job_title,
      employment_type: formData.employment_type,
      employment_status: formData.employment_status,
      joining_date: formData.joining_date
    }
    this.employeeService.updateEmployee(data).subscribe((response: any) => {
      this.dialogRef.close();
      this.onEditProduct.emit();
      this.serviceService.openSuccessSnackBar("Details updated successfully", "Ok");
    }, (error: any) => {
      this.serviceService.openFailureSnackBar("Something went wrong", "Try again");
    })
  }

  checkEmpID() {
    let employeeID: any = [];

    let ID = this.employeeForm.controls.employment_id.value;
    console.log(ID);
    this.employeeService.getEmployees().subscribe((res: any) => {

      res.forEach((element: any) => {
        employeeID.push(element.employment_id);
      })

      for (let i = 0; i < employeeID.length; i++) {
        if (employeeID[i] == ID) {
          this.result = false;
         this.serviceService.openFailureSnackBar('Employee ID already exists', 'Try again');
          break;
        } else if (ID == null) {
         this.serviceService.openFailureSnackBar('Kindly enter the Employee ID', 'Try again');
        }
        else {
          this.result = true;
        }
      }
    })
  }
  OnChangingID() {
    this.result = false;
  }
}
