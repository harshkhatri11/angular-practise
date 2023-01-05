import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StepperOrientation } from '@angular/material/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-form-template-test',
  templateUrl: './form-template-test.component.html',
  styleUrls: ['./form-template-test.component.scss'],
})
export class FormTemplateTestComponent implements OnInit {
  stepperOrientation: Observable<StepperOrientation>;
  //favoriteSeason: string;
  genders: string[] = ['Male', 'Female'];
  isLower: boolean = false;
  isUpper: boolean = false;
  isDigit: boolean = false;
  isSpecialChar: boolean = false;
  isMinlength: boolean = false;
  isPassPolicyCheck: boolean = false;
  isAccNumberValid: boolean = false;
  isPasswordMatch: boolean = false;
  passConfirmVisbility: boolean = false;
  passVisbility: boolean = false;
  selectedState: any;
  states = [
    { id: 1, name: 'Andhra Pradesh' },
    { id: 2, name: 'Arunachal Pradesh' },
    { id: 3, name: 'Gujarat' },
    { id: 4, name: 'Jammu and Kashmir' },
  ];
  selectedCity: any;
  city = [
    { id: 1, name: 'Vadodara' },
    { id: 2, name: 'Rajkot' },
    { id: 3, name: 'Bhubaneswar' },
    { id: 4, name: 'Gandhinagar' },
    { id: 5, name: 'Ranchi' },
  ];
  selectedBank: any;
  bankList = [
    { id: 1, name: 'State Bank of India' },
    { id: 2, name: 'HDFC' },
    { id: 3, name: 'Indian Overseas Bank' },
    { id: 4, name: 'Bank of India' },
    { id: 5, name: 'ICICI Bank' },
  ];

  constructor(
    breakpointObserver: BreakpointObserver,
    private serviceService: ServiceService
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  //::::::To make default step active by removing liner word in html stepper::::::::::://

  // @ViewChild('stepper') stepper: MatStepper;
  // ngAfterViewInit() {
  //   this.stepper.selectedIndex = 1;
  // }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://

  ngOnInit(): void {}

  userBasicDetails: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]+'),
    ]),
    middleName: new FormControl('', Validators.pattern('^[A-Za-z]+$')),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', Validators.required),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{10}'),
    ]),
    landLine: new FormControl(''),
    homeNo: new FormControl('', Validators.required),
    streetName: new FormControl('', Validators.required),
    landmark: new FormControl(''),
    pincode: new FormControl('', Validators.required),
    stateName: new FormControl('', Validators.required),
    cityName: new FormControl('', Validators.required),
  });

  userBankDetails: FormGroup = new FormGroup({
    bankname: new FormControl('', Validators.required),
    accNo: new FormControl('', Validators.required),
    reconfirmaccNo: new FormControl('', Validators.required),
    ifscNo: new FormControl('', Validators.required),
  });

  userProfileDetails: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
  });

  validateAccountNo(e: any) {
    if (
      this.userBankDetails.controls['accNo'].value == e &&
      this.userBankDetails.controls['reconfirmaccNo'].value == e
    ) {
      this.isAccNumberValid = true;
    } else {
      this.isAccNumberValid = false;
    }
  }

  validatepassword(e: any) {
    if (
      this.userProfileDetails.controls['password'].value == e &&
      this.userProfileDetails.controls['confirmpassword'].value == e
    ) {
      this.isPasswordMatch = true;
    } else {
      this.isPasswordMatch = false;
    }
  }

  passPolicyChecker(pass: any) {
    if (pass.match(/[a-z]/)) {
      this.isLower = true;
    } else {
      this.isLower = false;
    }

    if (pass.match(/[A-Z]/)) {
      this.isUpper = true;
    } else {
      this.isUpper = false;
    }

    if (pass.match(/[0-9]/)) {
      this.isDigit = true;
    } else {
      this.isDigit = false;
    }

    if (pass.match(/[@$%^]/)) {
      this.isSpecialChar = true;
    } else {
      this.isSpecialChar = false;
    }

    if (pass.length >= 8) {
      this.isMinlength = true;
    } else {
      this.isMinlength = false;
    }

    if (
      pass.match(/[a-z]/) &&
      pass.match(/[A-Z]/) &&
      pass.match(/[0-9]/) &&
      pass.match(/[@$%!^]/) &&
      pass.length >= 8
    ) {
      this.isPassPolicyCheck = true;
    } else {
      this.isPassPolicyCheck = false;
    }
  }

  resetPassPolicystate() {
    this.isPassPolicyCheck = false;
    this.isLower = false;
    this.isUpper = false;
    this.isDigit = false;
    this.isSpecialChar = false;
    this.isMinlength = false;
    this.isPasswordMatch = false;
    this.isAccNumberValid = false;
  }

  sendUserData() {
    const userData = {
      //User Basic Details

      firstName: this.userBasicDetails.controls['firstName'].value,
      middleName: this.userBasicDetails.controls['middleName'].value,
      lastName: this.userBasicDetails.controls['lastName'].value,
      email: this.userBasicDetails.controls['email'].value,
      gender: this.userBasicDetails.controls['gender'].value,
      mobile: this.userBasicDetails.controls['mobile'].value,
      landLine: this.userBasicDetails.controls['landLine'].value,
      homeNo: this.userBasicDetails.controls['homeNo'].value,
      streetName: this.userBasicDetails.controls['streetName'].value,
      landmark: this.userBasicDetails.controls['landmark'].value,
      pincode: this.userBasicDetails.controls['pincode'].value,
      stateName: this.userBasicDetails.controls['stateName'].value['name'],
      cityName: this.userBasicDetails.controls['cityName'].value['name'],

      //user Bank Details

      bankname: this.userBankDetails.controls['bankname'].value['name'],
      accNo: this.userBankDetails.controls['accNo'].value,
      //reconfirmaccNo: this.userBankDetails.controls['reconfirmaccNo'].value,
      ifscNo: this.userBankDetails.controls['ifscNo'].value,

      //user profile Details

      username: this.userProfileDetails.controls['username'].value,
      password: this.userProfileDetails.controls['password'].value,
      // confirmpassword:
      //   this.userProfileDetails.controls['confirmpassword'].value,
    };

    console.log('UserData', userData);
    this.serviceService.openSuccessSnackBar(
      'Your Response has been received Successfully',
      ''
    );
  }
}
