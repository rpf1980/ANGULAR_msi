import { Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public reciboColor: string;
  title = 'changeColorNgClass';

  recibeEmitter(e: string) {
    this.reciboColor = 'red';
  }

  
}
