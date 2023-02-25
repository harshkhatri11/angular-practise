import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName: [''],
      mobileNo: [''],
      email: [''],
      password: [''],
    });
  }

  signUp() {
    this.http
      .post<any>(environment.JSON_SERVER_URL + '/signupUsers', this.signupForm.value)
      .subscribe({
        next: (res) => {
          this.serviceService.openSuccessSnackBar('Sign Up successfull', '');
          this.signupForm.reset();
          this.router.navigate(['/json-server/login']);
        },
        error: (err) => {
          this.serviceService.openSuccessSnackBar(
            'Something went wrong',
            'Try again!!'
          );
        },
      });
  }
}
