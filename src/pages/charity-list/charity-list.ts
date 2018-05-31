import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { CharityProfilePage } from '../charity-profile/charity-profile';
//import { PortfolioPage } from '../portfolio/portfolio';


@Component({
  selector: 'page-charity-list',
  templateUrl: 'charity-list.html',
})
export class CharityListPage {

  public charities: Array<Charity> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    // Instantiate a new Charity instance for Elephants
    var charity1 = new Charity();
    charity1.id = 1;
    charity1.name = "Elephant Aid International";
    charity1.description = "Elephant Aid International (EAI) is a nonprofit organization that creates innovative approaches to the care and management of elephants.";
    charity1.deepDescription = "Elephant Aid International (EAI) is a nonprofit organization that creates innovative approaches to the care and management of elephants. With the combined efforts of international scientists, veterinarians, mahouts, elephant owners and elephant welfare supporters, EAI is helping to change how the public relates to elephants; how elephant owners view their elephants; how mahouts (elephant handlers) and elephant caregivers train elephants; and how captive elephants are cared for worldwide. By providing education and hands-on assistance, EAI is working to end the worldwide suffering of elephants…one elephant at a time.";
    charity1.charityCardImg = "https://elephantaidinternational.org/wp-content/uploads/2017/03/eai-donate-sidebar.jpg";
    charity1.charityImg = "https://elephantaidinternational.org/wp-content/uploads/2016/05/ERNA_share2.png";
    charity1.website = "https://elephantaidinternational.org";
    charity1.logo = "https://www.otarafoundation.com/wp-content/uploads/2015/03/IEA_index_03.jpg";

    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Feeding America";
    charity2.description = "The Feeding America network is the nation’s largest domestic hunger-relief organization, working to connect people with food and end hunger. Donors, staff, and volunteers all play an important role in our efforts to end hunger in the United States.";
    charity2.deepDescription = "Food. Hope. Stability. When families struggle to get enough to eat, they are often struggling to meet other basic needs as well — including housing, employment, healthcare and more. Feeding America helps provide meals to people in need through a network of food banks and helps address root causes of hunger.";
    charity2.charityImg = "http://www.waste360.com/sites/waste360.com/files/styles/article_featured_standard/public/feeding-america.jpg?itok=SLBdz-rq";
    charity2.charityCardImg = "http://www.feedingamerica.org/assets/images/page-images/woman-gleaning-300x300.jpg";
    charity2.website = "http://www.feedingamerica.org/";
    charity2.logo = "http://www.feedingamerica.org/assets/images/logo.png";

    // Add our 2 charity instances to our collection of charities
    this.charities.push(charity1);
    this.charities.push(charity2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityListPage');
  }

  navigateToCharity(charity: Charity) {
    this.navCtrl.push(CharityProfilePage, {
      charity: charity
    });
  
  }

}
