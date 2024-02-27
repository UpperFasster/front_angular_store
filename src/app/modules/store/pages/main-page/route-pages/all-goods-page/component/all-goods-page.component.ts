import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../../../../../services/backend/backend.service";
import { IProduct } from "src/app/modules/interfaces/IProduct";

@Component({
  selector: "goods-section",
  templateUrl: "./all-goods-page.component.html",
  styleUrls: ["./all-goods-page.component.scss"]
})

export class AllGoodsPageComponent implements OnInit {
  blankImages: any[] = new Array(50).fill(0);
  products: IProduct[] = [];

  constructor(
    public bs: BackendService,
  ) { }
  
  ngOnInit(): void {
    this.bs.getAllData()
      .subscribe((response: IProduct[]) => {
        this.products = response;
      });
  }
}
