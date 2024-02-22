import { Component, ViewEncapsulation } from '@angular/core';

// categories card
interface categoriesCard {
  id: number;
  imgSrc: string;
  title: string;
  items: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppCategoriesComponent {

  

  // categories card
  categoriesCard: categoriesCard[] = [
    {
      id: 1,
      imgSrc: '/assets/images/products/s1.jpg',
      title: 'Men Clothes',
      items: '24 items',
    },
    {
      id: 2,
      imgSrc: '/assets/images/products/s2.jpg',
      title: 'Accessories',
      items: '43 items',
    },
    {
      id: 3,
      imgSrc: '/assets/images/products/s3.jpg',
      title: 'Cotton Clothes',
      items: '31 items',
    },
    {
      id: 4,
      imgSrc: '/assets/images/products/s4.jpg',
      title: 'Summer Clothes',
      items: '26 items',
    },
    {
      id: 5,
      imgSrc: '/assets/images/products/s5.jpg',
      title: 'Wedding Clothes',
      items: '52 items',
    },
    {
      id: 6,
      imgSrc: '/assets/images/products/s6.jpg',
      title: 'Spring Collection',
      items: '24 items',
    },
    {
      id: 7,
      imgSrc: '/assets/images/products/s7.jpg',
      title: 'Casual Clothes',
      items: '52 items',
    },
    {
      id: 8,
      imgSrc: '/assets/images/products/s8.jpg',
      title: 'Hats',
      items: '26 items',
    },
  ];
}
