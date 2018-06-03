import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { PaymentPage } from '../payment/payment';
import { CharityListPage} from '../charity-list/charity-list';
import { PortfolioPage } from '../portfolio/portfolio';
import { ProfilePage } from '../profile/profile';



@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab tabIcon="compass" tabTitle="Charities" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="pie" tabTitle="Portfolio" [root]="tab2"></ion-tab>
      <ion-tab tabIcon="cash" tabTitle="Payment" [root]="tab3"></ion-tab>
      <ion-tab tabIcon="person" tabTitle="Profile" [root]="tab4"></ion-tab>
    </ion-tabs>
  `

})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = CharityListPage;
    this.tab2 = PortfolioPage;
    this.tab3 = PaymentPage;
    this.tab4 = ProfilePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
