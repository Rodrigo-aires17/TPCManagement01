import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form03',
  templateUrl: './form03.page.html',
  styleUrls: ['./form03.page.scss'],
})
export class Form03Page implements OnInit {

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
