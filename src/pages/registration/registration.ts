import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

public username: string;
public email: string;
public fullname: string;
public password: string;
public confirmed: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  register() {
    this.navCtrl.push(TabsPage, { username: this.username, email: this.email, fullname: this.fullname, password: this.password });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  checkPassword() {
    if(this.password != this.confirmed) {
        alert('Passwords do not match.')
    }
    else {
        this.register();
    }
}

}
