import { SocialAuthService } from '@abacritt/angularx-social-login';
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
    public socialAuthServive: SocialAuthService
  ) {}

  ngOnInit(): void {}
  logout(): void {
    this.socialAuthServive
      .signOut()
      .then(() => this.router.navigate(['test/chart-test']));
  }
}
