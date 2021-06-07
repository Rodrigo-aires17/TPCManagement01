import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  resultadosPage(){
    this.route.navigate(['resultados']) 
   }
   formPage(){
    this.route.navigate(['form']) 
   }
}
