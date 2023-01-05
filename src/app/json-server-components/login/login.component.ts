import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    this.http.get<any>('http://localhost:3000/signupUsers').subscribe({
      next: (res) => {
        const user = res.find((a: any) => {
          return (
            a.email == this.loginForm.value.email &&
            a.password == this.loginForm.value.password
          );
        });
        if (user) {
          this.serviceService.openSuccessSnackBar('Login Successfull', '');
          this.loginForm.reset();
          this.router.navigate(['/test/table-test']);
        } else {
          this.serviceService.openFailureSnackBar(
            'User not found',
            'Try again!!'
          );
        }
      },
      error: (err) => {
        this.serviceService.openFailureSnackBar(
          'Something went wrong',
          'Try again!!'
        );
      },
    });
  }
}
