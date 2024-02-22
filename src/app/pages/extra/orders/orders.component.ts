import { Component, ViewEncapsulation } from '@angular/core';

export interface productsData {
  id: number;
  order: string;
  date: string;
  customer: string;
  paymentStatus: string;
  orderStatus: string;
  total: number;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    order: '#12512B',
    date: 'May 5, 4:20 PM',
    customer: 'Tom Anderson',
    paymentStatus: 'Paid',
    orderStatus: 'Ready',
    total: 49.90,
  },
  {
    id: 2,
    order: '#12523C',
    date: 'May 5, 4:15 PM',
    customer: 'Jayden Walker',
    paymentStatus: 'Paid',
    orderStatus: 'Ready',
    total: 34.36,
  },
  {
    id: 3,
    order: '#51232A',
    date: 'May 5, 4:15 PM',
    customer: 'Inez Kim',
    paymentStatus: 'Paid',
    orderStatus: 'Shipped',
    total: 5.51,
  },
  {
    id: 4,
    order: '#23534A',
    date: 'May 5, 4:12 PM',
    customer: 'Francisco Henry',
    paymentStatus: 'Pending',
    orderStatus: 'Received',
    total: 29.74,
  },
  {
    id: 5,
    order: '#51323C',
    date: 'May 5, 4:12 PM',
    customer: 'Violet Phillips',
    paymentStatus: 'Pending',
    orderStatus: 'Shipped',
    total: 23.06,
  }
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppOrdersComponent {

  displayedColumns: string[] = ['order', 'date', 'customer', 'paymentStatus', 'orderStatus', 'total'];
  dataSource = ELEMENT_DATA;
}
