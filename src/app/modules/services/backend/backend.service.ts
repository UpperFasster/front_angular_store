import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/modules/interfaces/IProduct';
import { BaseBackendService } from '../baseService/baseBackend.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService extends BaseBackendService {
  public user_id: String = "";

  getById(id: string): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.baseUrl}/product/${id}`);
  }

  getAllData(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.baseUrl}/getAllProducts`);
  }

  getAllDataNew(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.baseUrl}/getAllProducts`);
  }

  likeProduct(product_id: String): void {
    if (this.user_id == "") {
      console.log("First of all, get login. Push button: Get login")
    } else {
      this.httpClient.get(`${this.baseUrl}/likeItem/${product_id}/${this.user_id}`)
        .subscribe(data => {
          console.log(`User with id ${this.user_id}, liked item ${product_id}`)
        });
    }
  }

  addProductToCart(userId: string, productId: string, quantity: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set("userId", userId)
      .set("productId", productId)
      .set("quantity", quantity);

    return this.httpClient.post(`${this.baseUrl}/cart/add`, {params: params});
  }

  getAllProductsInCartForUser(userId: string): Observable<String[]> {
    const params: HttpParams = new HttpParams()
      .set("userId", userId);

    return this.httpClient.get<String[]>(`${this.baseUrl}/cart/get`, {params: params});
  }

  deleteItemFromCart(userId: string, productId: string): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set("userId", userId)
      .set("productId", productId);

    return this.httpClient.delete(`${this.baseUrl}/cart/delete`, {params: params});
  }

  updateQuantityToCartItem(userId: string, productId: string, quantity: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set("userId", userId)
      .set("productId", productId)
      .set("quantity", quantity);
      
    return this.httpClient.put(`${this.baseUrl}/cart/update`, {params: params});
  }
}
