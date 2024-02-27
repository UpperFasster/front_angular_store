import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { BackendService } from "../backend/backend.service";


@Injectable()
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Set<string>>(new Set<string>());
  cartItems$ = this.cartItemsSubject.asObservable();

  private cartItems: Set<string> = new Set<string>();

  get cartItemsArray(): Set<string> {
    return this.cartItems;
  }

  constructor(
    private cookieService: CookieService,
    private backendService: BackendService
  ) {
    const storedCartItems = cookieService.get('cartItems');
    if (storedCartItems) {
      this.cartItems = new Set(JSON.parse(storedCartItems));
      this.cartItemsSubject.next(new Set(this.cartItems));
    }
  }

  addToCart(product_id: string, quantity: number): void {
    if (quantity <= 5 && quantity >= 1 && product_id) {
      this.backendService.addProductToCart("user_id", product_id, quantity)
      .subscribe((res: any) => {
        this.cartItems.add(product_id);
        this.updateLocalStorage();
      });
    }
  }

  deleteItemByName(product_id: string): void {
    if (this.cartItems.has(product_id)) {
      this.backendService.deleteItemFromCart("user_id", product_id)
        .subscribe((res: any) => {
          this.cartItems.delete(product_id);
          this.updateLocalStorage();
        });
    }
  }

  updateItemCountInCart(product_id: string, quantity: number): void {
    if (quantity <= 5 && quantity >= 1 && this.cartItems.has(product_id)) {
      this.backendService.updateQuantityToCartItem("user_id", product_id, quantity)
        .subscribe((res: any) => {
          
        });
    }
  }

  private updateLocalStorage() {
    this.cookieService.set('cartItems', JSON.stringify(Array.from(this.cartItems)));
    this.cartItemsSubject.next(new Set(this.cartItems));
  }
}
