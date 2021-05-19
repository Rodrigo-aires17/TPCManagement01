import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login(){
    let email = (document.getElementById('email') as HTMLInputElement).value
    let senha = (document.getElementById('password') as HTMLInputElement).value

    if (email == localStorage.getItem('email') && senha == localStorage.getItem('pass')) {
      console.log("OK!")
      window.location.href="/form"
    }

    else {
      alert("Usuário ou senha incorretos!")
    }
    
  }

  constructor() { 
    
  }

  ngOnInit() {
  }

}