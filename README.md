# angular-@output

![image](https://user-images.githubusercontent.com/38757471/130340987-ba2a491b-a0c7-43fc-ac04-89048e41419d.png)


employee.ts (parent)

```js
export interface IEmployee {
  id: number;
  code: string;
  name: string;
  salary: number;
  starRating: number;
}
```

employee-component.component.ts (parent)

```js
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.listFilter = 'Patel';
  }

  pageTitle: string = 'Employee List';

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In Setter:', value);
    this.filteredEmployees = this.performFilter(value);
  }

  filteredEmployees: IEmployee[] = [];
  employees: IEmployee[] = [
    {
      id: 1,
      code: 'VOD1410',
      name: 'Akshay Patel',
      salary: 3000,
      starRating: 3.5
    },
    {
      id: 2,
      code: 'VOD1710',
      name: 'Panth Patel',
      salary: 1500,
      starRating: 4
    },
    {
      id: 2,
      code: 'VOD0408',
      name: 'Satish Patel',
      salary: 5000,
      starRating: 4.5
    }
  ];

  performFilter(filterBy: string): IEmployee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((employee: IEmployee) =>
      employee.name.toLocaleLowerCase().includes(filterBy)
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Employee List ' + message;
  }
}

```
employee-component.component.html (parent)

```html
<div>
  <div>
    {{pageTitle}}
  </div>
  <div>
    <input type="text" [(ngModel)]="listFilter" />
  </div>
  <br />
  <div>
    Filter By: {{listFilter}}
  </div>
  <div>
    <table>
      <thead>
        <td>Id</td>
        <td>Code</td>
        <td>Name</td>
        <td>Salary</td>
        <td>Rating</td>
      </thead>
      <tr *ngFor="let employee of filteredEmployees">
        <td>{{employee.id}}</td>
        <td>{{employee.code}}</td>
        <td>{{employee.name}}</td>
        <td>{{employee.salary}}</td>
        <td>
          <app-star
            [rating]="employee.starRating"
            (ratingClicked)="onRatingClicked($event)"
          ></app-star>
        </td>
      </tr>
    </table>
  </div>
</div>
```
star.component.ts (child)

```js
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  constructor() {}

  @Input() rating: number = 0;
  cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = this.rating * (75 / 5);
  }

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
```

star.component.html (child)

```html
<div class="crop" [style.width.px]="cropWidth" title="rating">
  <div style="width:75px" (click)="onClick()">
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
  </div>
</div>
```

star.component.css (child)

```css
.crop {
  overflow: hidden;
}
div {
  cursor: pointer;
}
```

style.css

Install bootstrap font-awesome and import in style.css

```css
@import '~bootstrap/dist/css/bootstrap.min.css';
@import 'font-awesome/css/font-awesome.min.css';
```

app.module.ts

```js
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
```

app.component.html

```html
<app-employee-component></app-employee-component>
```
![image](https://user-images.githubusercontent.com/38757471/130340757-7250c30a-6a2d-4c92-b66f-98628f01870f.png)



