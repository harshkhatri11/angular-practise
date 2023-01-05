import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'template';
  // today: any;

  // currentLanguage: any = 'en';
  // languageCode: any = 'en';



  constructor(public translate: TranslateService) {

    // setInterval(() => {
    //   this.today = moment().format('dddd , MMMM Do YYYY, h:mm:ss A');
    // },)
  }


  ngOnInit(): void {

  }

  // languages = [
  //   { languageCode: 'en', languageName: 'English' },
  //   { languageCode: 'hi', languageName: 'Hindi' },
  //   { languageCode: 'gu', languageName: 'Gujarati' },
  // ];

  // languageChange(e: any) {
  //   this.currentLanguage = e;
  //   this.translate.use(this.currentLanguage);
  //   moment.locale(this.currentLanguage)
  // }

}
