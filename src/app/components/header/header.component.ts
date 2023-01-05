import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { ServiceService } from 'src/app/service.service';
import {
  SocialAuthService,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  today: any;
  currentLanguage: any = 'en';
  languageCode: any = 'en';
  currentTemp: any;
  cityName: string = '';
  stateName: string = '';
  countryName: string = '';
  prompt: boolean = false;
  hamburgerOpen: boolean = false;
  step: number = -1;

  constructor(
    private router: Router,
    public translate: TranslateService,
    private service: ServiceService,
    public socialAuthService: SocialAuthService
  ) {
    setInterval(() => {
      // this.today = moment().format('dddd , MMMM Do YYYY, h:mm:ss A');
      this.today = moment().format('llll');
    });
  }

  ngOnInit(): void {
    //::::Comment out this.getUserLocationTemp() function to not call api continuously while developing::::://
    //this.getUserLocationTemp();
  }

  languages = [
    { languageCode: 'en', languageName: 'English' },
    { languageCode: 'hi', languageName: 'Hindi' },
    { languageCode: 'gu', languageName: 'Gujarati' },
  ];

  languageChange(e: any) {
    this.currentLanguage = e;
    this.translate.use(this.currentLanguage);
    moment.locale(this.currentLanguage);
  }

  getUserLocationTemp() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.service
            .getWeatherData(position.coords.latitude, position.coords.longitude)
            .subscribe((res) => {
              console.log(position);

              console.log(res);

              this.currentTemp = Math.round(res?.current?.temp);
              console.log(this.currentTemp);
            });

          this.service
            .getuserLocation(
              Math.round(position.coords.latitude),
              Math.round(position.coords.longitude)
            )
            .subscribe((res) => {
              console.log(res);
              this.cityName = res[0].name;
              this.stateName = res[0].state;
              this.countryName = res[0].country;
              console.log(this.cityName);
              console.log(this.stateName);
              console.log(this.countryName);
            });
          this.prompt = true;
        },
        (position) => alert('User denied geolocation prompt ')
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  // -1 makes all the accordians to be closed. Can replace 0 with -1 to open the required accordion open on page load.
  setState(stateNumb: number) {
    this.step = stateNumb;
  }

  loginWithGoogle(): void {
    console.log('hello');

    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['test/dashboard-test']));
  }

  logout(): void {
    this.socialAuthService
      .signOut()
      .then(() => this.router.navigate(['test/chart-test']));
  }
}
