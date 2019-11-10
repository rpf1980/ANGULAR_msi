import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeChildComponent } from './joke-child/joke-child.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokePoolComponent } from './joke-pool/joke-pool.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeChildComponent,
    JokeFormComponent,
    JokePoolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
