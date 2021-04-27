import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form04',
  templateUrl: './form04.page.html',
  styleUrls: ['./form04.page.scss'],
})
export class Form04Page implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  public form = [
    { val: 'VPN', isChecked: false },
    { val: 'Network Driver', isChecked: false },
    { val: 'Dashboard', isChecked: false },
    { val: 'Intranet', isChecked: false }
  ];
}

