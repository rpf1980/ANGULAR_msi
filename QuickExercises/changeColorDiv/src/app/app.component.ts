import { Component, Input, OnInit, Host } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() recibeBool: boolean;
  constructor() {
    this.recibeBool = true;
  }

  OnInit() {
    console.log(this.recibeBool);
  }

  recibeElDatoBool($event) {
    this.recibeBool = $event;
  }

  }