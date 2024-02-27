import { Injectable, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ViewBackendService {
  private _products?: IProduct[];

  constructor() { }

  get products(): IProduct[] {
    return this._products || [];
  }

  set products(products: IProduct[]) {
    this._products = products;
  }
}
