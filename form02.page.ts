import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.page.html',
  styleUrls: ['./form02.page.scss'],
})
export class Form02Page implements OnInit {

 
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