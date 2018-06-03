import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App} from 'ionic-angular';
import { User } from '../../models/user';
import { CharityListPage } from '../charity-list/charity-list';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
    this.user = new User();

  }

  navigateToHome() {
    this.app.getRootNav().setRoot(HomePage);
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
