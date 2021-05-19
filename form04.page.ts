import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-form04',
  templateUrl: './form04.page.html',
  styleUrls: ['./form04.page.scss'],
})
export class Form04Page implements OnInit {
  
  public user = {
    id: 0,
    name:'',
    email:'',
    phone:0,
    cc: 0,
    manager: '',
    company:'',
    access: '',
 
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




