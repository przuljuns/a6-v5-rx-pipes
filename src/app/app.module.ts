import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { GreatPipe } from './great.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    GreatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
