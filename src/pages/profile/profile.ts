import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { CharityListPage } from '../charity-list/charity-list';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User();
  }

  navigateToHome() {
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    this.user.firstname = "User";
    this.user.lastname = "Name";
    this.user.email = this.navParams.get("username");
    this.user.password = this.navParams.get("password");
  }

  navToCharityList() {
    this.navCtrl.push(CharityListPage);
  }

}
