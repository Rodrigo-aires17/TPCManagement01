import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isTextFieldType: boolean;
  constructor( private router: Router, public navCtrl : NavController) { }

  ngOnInit() {
  }

  navigateToLoginPage(){
 this.router.navigate(['home'])
  }
  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
}
}