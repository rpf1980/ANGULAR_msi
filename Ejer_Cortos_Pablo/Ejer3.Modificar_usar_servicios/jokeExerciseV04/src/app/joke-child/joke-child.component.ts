import { Component, OnInit } from '@angular/core';
import {Component, NgModule, Input, Output, EventEmitter, Inject, InjectionToken } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-joke-child',
  templateUrl: './joke-child.component.html',
  styleUrls: ['./joke-child.component.css']
})
export class JokeChildComponent implements OnInit {

  const MAX_JOKES_TOKEN = new InjectionToken<number>("Max Jokes");

  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
    
    toggle() {
      this.hide = !this.hide;
    }

}
