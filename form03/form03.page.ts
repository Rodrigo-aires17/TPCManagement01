import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form03',
  templateUrl: './form03.page.html',
  styleUrls: ['./form03.page.scss'],
})
export class Form03Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public form = [
    { val: 'DXC Tech', isChecked: false },
    { val: 'Accenture', isChecked: false },
    { val: 'BRQ Digital Solutions', isChecked: false }
  ];
}

