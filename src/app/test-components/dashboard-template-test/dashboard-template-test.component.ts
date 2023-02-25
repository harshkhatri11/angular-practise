import { SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-template-test',
  templateUrl: './dashboard-template-test.component.html',
  styleUrls: ['./dashboard-template-test.component.scss'],
})
export class DashboardTemplateTestComponent implements OnInit {

  constructor(
    private router: Router,
    public socialAuthServive: SocialAuthService,
    public http:HttpClient
  ) {}

  ngOnInit(): void {
    // this.http.get('https://json-mock-server-zfho.onrender.com/users').subscribe((res)=>{
    //   console.log(res);
    // })
  }
  logout(): void {
    this.socialAuthServive
      .signOut()
      .then(() => this.router.navigate(['test/chart-test']));
  }
}
