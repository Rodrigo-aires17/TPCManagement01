import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.page.html',
  styleUrls: ['./form01.page.scss'],
})
export class Form01Page implements OnInit {
  public user = {
    id: 0,
    name:'',
    email:'',
    phone:0,
    cc: 0,
    manager: '',
    access: '',
    company:'',
 
   };
 
   constructor(
     private userService : UserService,
     private navCtrl: NavController
   ) { 
     
 
   }
 
   ngOnInit() {
   }
 
 public create (){
 this.userService.create(this.user);
 this.navCtrl.back();
 
 }
 }