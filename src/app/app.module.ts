import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

//::::::::::::::::::::Service File:::::::::::::::::::::::::::::://

import { ServiceService } from './service.service';

//::::::::::::::::::::::::To use Translate Services:::::::::::::::::::::://

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

//:::::::::: To apply skeleton loder effect ::::::::::::://

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

//:::::Shared module:::::::::::://

import { SharedModule } from './shared.module';

//:::::::::::::Interceptors::::::::::::::::::://
import { LoaderInterceptor } from './interceptors/loader.interceptor';

//:::::::::::::::::google Signin ::::::::::::::://
import {
  GoogleLoginProvider,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';

//::::::::::::::::::My own Created Components ::::::::::::::::::::::://

import { HeaderComponent } from './components/header/header.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthGuardGuard } from './auth-guard.guard';

// AoT requires an exported function for factories

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/translate/', suffix: '.json' },
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HeaderComponent,
    LoaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    SharedModule,
    SocialLoginModule,
    NgxSkeletonLoaderModule.forRoot({
      animation: 'pulse',
      loadingText: 'This item is currently loading...',
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '413123742762-pol2mnd2on3kb1svg9taqddimn3ub8n8.apps.googleusercontent.com'
            ), // your client id
          },
        ],
      },
    },
    AuthGuardGuard,
    ServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
