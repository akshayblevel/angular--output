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
