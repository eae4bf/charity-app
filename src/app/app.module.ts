import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { CharityListPage } from '../pages/charity-list/charity-list';
import { CharityProfilePage } from '../pages/charity-profile/charity-profile';
import { RegistrationPage } from '../pages/registration/registration';
import { TabsPage } from "../pages/tabs/tabs";
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { PaymentPage } from '../pages/payment/payment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    CharityListPage,
    TabsPage,
    CharityProfilePage,
    PortfolioPage,
    PaymentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    CharityListPage,
    TabsPage,
    CharityProfilePage,
    PortfolioPage,
    PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}