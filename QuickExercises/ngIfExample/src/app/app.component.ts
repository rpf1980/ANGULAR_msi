import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngIfExample';

  people: any[] = [
    {
      "name": "Douglas Pace",
      "age": 35
    },
    {
      "name": "Mcleod Mueller",
      "age": 32
    },
    {
      "name": "Day Meyers",
      "age": 21
    },
    {
      "name": "Aguirre Ellis",
      "age": 34
    },
    {
      "name": "Cook Tyson",
      "age": 32
    }
  ];
}
