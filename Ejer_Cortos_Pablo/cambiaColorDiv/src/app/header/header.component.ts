import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public bool: boolean;
  @Output() emiteBool = new EventEmitter<boolean>(); 
  constructor() { 
    this.bool = true;
  }

  ngOnInit() {
  }

  funEmiteBool(e:boolean) {
    this.emiteBool.emit(e);
  }

}
