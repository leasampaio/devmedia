import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
