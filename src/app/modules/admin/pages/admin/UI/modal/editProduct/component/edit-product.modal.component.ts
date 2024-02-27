import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AdminBackendService } from "src/app/modules/admin/pages/services/backend/admin-backend.service";
import { IProduct } from "src/app/modules/interfaces/IProduct";
import { Photo } from "../../../../interfaces/Photo";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.modal.component.html',
  styleUrls: ['./edit-product.modal.component.scss']
})
export class EditProductModalComponent implements OnInit {
  form!: FormGroup;
  mainPhoto?: Photo;
  otherPhotos: Photo[] = [];
  productData!: IProduct;

  constructor(
    private formBuilder: FormBuilder,
    public bs: AdminBackendService,
    private dialogRef: MatDialogRef<EditProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: IProduct
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.data.name, Validators.required],
      price: [this.data.price, [Validators.required, Validators.min(0)]],
      discount: [this.data.discount, [Validators.required, Validators.min(0)]],
      currency: [this.data.currency, Validators.required],
      quantity: [this.data.quantity, [Validators.required, Validators.min(0)]],
      description: [this.data.description, [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
    });
    this.productData = this.data;
  }

  // edit 

  onSubmit() {

  }

  deleteOtherPhoto(_t89: number) {

  }

  onOtherPhotosSelected($event: Event) {

  }

  deleteMainPhoto() {

  }

  fileSelected($event: Event) {

  }

  // edit

  update() {
    this.bs.updateProduct(this.data)
      .subscribe((res: any) => {
        this.close();
      });
  }

  private close(): void {
    this.dialogRef.close();
  }
}
