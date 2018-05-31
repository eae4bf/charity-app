import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProfilePage } from "../profile/profile";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login() {
    // Our username and password (on this) should have data from the user
    this.navCtrl.push(TabsPage, {
      username: this.username,
      password: this.password
    });
  }
}