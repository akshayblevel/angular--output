import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { StarComponent } from './shared/star/star.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, EmployeeComponentComponent, StarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
