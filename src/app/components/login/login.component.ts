import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
//import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:any = FormGroup;
  constructor(
    private http:HttpClient,
    public router:Router,
    private serviceService: ServiceService,
    public formbuilder : FormBuilder,
  ){}

  ngOnInit(){
    this.loginForm = this.formbuilder.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,Validators.required]
    })
  }

  login(){
    this.http.get<any>(environment.JSON_SERVER_URL + '/signupUsers').subscribe({
      next:(res)=>{
        const user = res.find((a:any)=>{
          return (
            a.email == this.loginForm.value.email &&
            a.password == this.loginForm.value.password
          );
        });
        if(user){
          this.serviceService.openSuccessSnackBar("Login Successfull","");
          this.loginForm.reset();
          this.router.navigate(['applications/ems']);
        }else{
          this.serviceService.openFailureSnackBar("Invalid username or password","Try again");
        }
      },error:(err)=>{
        this.serviceService.openFailureSnackBar("Something went wrong","Try again");
      }
    });
  }
}
