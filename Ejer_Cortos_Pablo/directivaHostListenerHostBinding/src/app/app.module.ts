import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { DirectivasDirective } from './directivas.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    DirectivasDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
