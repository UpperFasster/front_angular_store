import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { CartService } from 'src/app/modules/services/cart/Cart.service';


@Component({
  selector: 'MainPage',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  cartItems: Set<string> = new Set<string>();
  lang: string = "EN";

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cartService.cartItems$
      .subscribe(items => {
        this.cartItems = items;
      })
  }
}
