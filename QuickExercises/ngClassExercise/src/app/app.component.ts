import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: any[] = [
    {
      "name": "Douglas Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod Mueller",
      "country": 'USA'
    },
    {
      "name": "Day Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook Tyson",
      "country": 'USA'
    }
  ];
}
