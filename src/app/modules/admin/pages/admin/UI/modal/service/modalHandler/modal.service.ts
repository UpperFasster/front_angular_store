import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CreateProductModalComponent } from "../../createProduct/component/create-product.modal.component";
import { EditProductModalComponent } from "../../editProduct/component/edit-product.modal.component";
import { IProduct } from "src/app/modules/interfaces/IProduct";

@Injectable()
export class ModalService {
  constructor(
    private dialog: MatDialog
  ) { }

  openCreateProductDialog(): void {
    this.dialog.open(CreateProductModalComponent, {
      
    });
  }

  openEditProductDialog(iFormDTO: IProduct): void {
    this.dialog.open(EditProductModalComponent, {
      data: {
        ...iFormDTO
      }
    });
  }
}
