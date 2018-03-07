import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expense Tracker';
  data: any = [{
    name: 'Name Of Product',
    price: 100,
    quantity: 2,
    category: 'Grocery',
    date: '06/03/2018',
    image: '3'
  }];
  fields: any = [
    {
      field: 'name',
      description: 'Name Of The Product',
      element: 'text'
    },
    {
      field: 'price',
      description: 'Price',
      element: 'number'
    },
    {
      field: 'quantity',
      description: 'Quantity',
      element: 'number'
    },
    {
      field: 'category',
      description: 'Category',
      element: 'dropdown',
      options: ['Grocery', 'Petrol', 'Medical', 'Vegetables', 'Fruits', 'Rent', 'EMI', 'Chits', 'Electricity Bill', 'Shopping', 'Resturant', 'Others']
    },
    {
      field: 'date',
      description: 'Date',
      element: 'date'
    },
    {
      field: 'image',
      description: 'Image',
      element: 'image',
      hide: true
    }
  ];

  public addNewExpense(newExpense) {
    debugger;
    console.log(newExpense);
  }
}
