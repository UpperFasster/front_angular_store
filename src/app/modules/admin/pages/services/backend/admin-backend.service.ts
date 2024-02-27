import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from '../../admin/UI/modal/createProduct/interfaces/ICurrency';
import { IProduct } from 'src/app/modules/interfaces/IProduct';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/modules/services/backend/backend.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminBackendService extends BackendService {
  // private baseUrl: String = "http://192.168.68.109:8080";
  // public user_id: String = "";
  // public products?: IProduct[];
  
  currencyOptions: Currency[] = [
    { name: 'USD', sign: '$' },
    { name: 'EUR', sign: '€' },
    { name: 'GBP', sign: '£' }
  ];

  addNewProduct(newProduct: FormGroup, photo: Blob, additonalImages: Blob[]): Observable<any> {
    const formData = new FormData();

    formData.append("data", JSON.stringify(newProduct.value));
    formData.append("main-img", photo, 'main-photo.png');
    additonalImages.forEach((blob: Blob, index: number) => {
      formData.append("additional-images", blob, `file${index + 1}.png`);
    });

    return this.httpClient.post(`${this.baseUrl}/addProduct`, formData);
  }

  deleteProduct(product_id: String, index: number): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/delProduct/${product_id}`);
      // .subscribe(data => {
      //   this.viewBackend.products?.splice(index, 1)
      // });
  }

  updateProduct(product: IProduct): Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/updateProduct`, product);
  }
}
