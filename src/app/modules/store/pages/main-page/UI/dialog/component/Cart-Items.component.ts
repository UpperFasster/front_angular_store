import { Component, OnInit } from "@angular/core";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  // Add more properties as needed
}

@Component({
  selector: "app-CartItems",
  templateUrl: "./Cart-Items.component.html",
  styleUrls: ["./Cart-Items.component.scss"]
})
export class CartItemsComponent {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Sample Item 1',
      price: 25,
      quantity: 2,
      imageUrl: '1.jpg'
    },
    {
      id: 2,
      name: 'Sample Item 2',
      price: 30,
      quantity: 1,
      imageUrl: '2.jpg'
    },
    {
      id: 3,
      name: 'Sample Item 3',
      price: 35,
      quantity: 4,
      imageUrl: '3.jpg'
    },
    {
      id: 3,
      name: 'Sample Item 3',
      price: 35,
      quantity: 4,
      imageUrl: '3.jpg'
    },
    {
      id: 3,
      name: 'Sample Item 3',
      price: 35,
      quantity: 4,
      imageUrl: '3.jpg'
    },
    {
      id: 3,
      name: 'Sample Item 3',
      price: 35,
      quantity: 4,
      imageUrl: '3.jpg'
    },
  ];

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeItem(item: CartItem): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  checkout(): void {
    // Logic for checkout
    // You can implement redirecting to a checkout page or any other desired action
  }
}
