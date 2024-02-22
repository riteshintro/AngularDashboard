import { Routes } from '@angular/router';


// pages
import { AppIconsComponent } from './icons/icons.component';
import { AppSamplePageComponent } from './sample-page/sample-page.component';
import { AppOrdersComponent } from './orders/orders.component';
import { AppCategoriesComponent } from './categories/categories.component';

export const ExtraRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'icons',
        component: AppIconsComponent,
      },
      {
        path: 'sample-page',
        component: AppSamplePageComponent,
      },
      {
        path: 'orders',
        component: AppOrdersComponent,
      },
      {
        path: 'categories',
        component: AppCategoriesComponent,
      }
    ],
  },
];
