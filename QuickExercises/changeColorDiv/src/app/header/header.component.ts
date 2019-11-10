import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  public bool: boolean;

  @Output() pasaBool = new EventEmitter();
  constructor() {
    this.bool = true;
   }

   // OnInit se ejecuta cuando el componente se crea satisfactoriamente
  ngOnInit() {
  }

  lanzar(valor: boolean) {
    this.pasaBool.emit(valor);
  }
}