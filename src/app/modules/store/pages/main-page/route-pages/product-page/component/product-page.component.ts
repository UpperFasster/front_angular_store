import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/modules/interfaces/IProduct';
import { BackendService } from '../../../../../../services/backend/backend.service';
import { CartService } from 'src/app/modules/services/cart/Cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  goodsId?: string;
  product?: IProduct;
  
  photo_id_product?: string = this.product?.photo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService,
    private cartService: CartService,
  ) { }

  setId(id: string) {
    this.photo_id_product = id;
  }

  addToCart(product_id: string, quantity: number) {
    this.cartService.addToCart(product_id, quantity);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.goodsId = params['id'];
      if (this.goodsId != null) {
        this.backendService.getById(this.goodsId)
          .subscribe((data: IProduct) => {
              this.product = data;
              this.photo_id_product = this.product?.photo;
            }
          )
      }
    });
  }

}
