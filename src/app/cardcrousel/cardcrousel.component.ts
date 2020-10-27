import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cardcrousel',
  templateUrl: './cardcrousel.component.html',
  styleUrls: ['./cardcrousel.component.scss']
})
export class CardcrouselComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    autoHeight: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
     1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
    nav: true
  }
  ngOnInit(): void {
  }
 
}
