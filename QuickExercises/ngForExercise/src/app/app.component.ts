import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngForExercise';

  people: any[] = [
    {
      "name": "Douglas Pace"
    },
    {
      "name": "Mcleod Mueller"
    },
    {
      "name": "Day Meyers"
    },
    {
      "name": "Aguirre Ellis"
    },
    {
      "name": "Cook Tyson"
    }
  ]
}
