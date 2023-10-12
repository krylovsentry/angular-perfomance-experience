import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnumToObjCompareComponent } from './enum-case/components/enum-to-obj-compare/enum-to-obj-compare.component';

@NgModule({
  declarations: [
    AppComponent,
    EnumToObjCompareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
