import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  header = new Headers({ 'Content-Type': 'application/json' });
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClientModule) {
  }
  //Variable defination
  credential: object = {
    email: "",
    pwd: ""
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  submit(cred: object) {
    console.log("Cred", cred);
    this.http.post('/login', cred)
      .subscribe(data => {
        console.log("data", data);
      });
    //Approach 2
    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
      );
  }

}
