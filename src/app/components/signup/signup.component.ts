import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { environment } from 'src/environments/environment';


@Component({
selector: 'app-signup',
templateUrl: './signup.component.html',
styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

signupForm:any = FormGroup;
constructor(
  private http:HttpClient,
  public router:Router,
  private serviceService: ServiceService,
  public formbuilder : FormBuilder,
){}

ngOnInit(){
  this.signupForm = this.formbuilder.group({
    email:[null,[Validators.required,Validators.email]],
    password:[null,Validators.required]
  })
}

signup(){

  this.http.get<any>( environment.JSON_SERVER_URL + '/signupUsers').subscribe({
    next:(res)=>{
      const user = res.find((a:any)=>{
        return (
          a.email == this.signupForm.value.email
        );
      });
      if(!user){
        this.http.post<any>(environment.JSON_SERVER_URL + '/signupUsers',this.signupForm.value).subscribe({
          next:(res)=>{
            this.serviceService.openSuccessSnackBar("Signup Successfull","");
            this.signupForm.reset();
            this.router.navigate(['/login']);
          },
          error:(err)=>{
           this.serviceService.openFailureSnackBar("Something went wrong","Try again");
          }
        });

      }else{
       this.serviceService.openFailureSnackBar("User is already exist","Try again");

      }
  }
});
}
}
