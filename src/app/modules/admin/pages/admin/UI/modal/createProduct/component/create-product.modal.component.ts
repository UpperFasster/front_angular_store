import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminBackendService } from 'src/app/modules/admin/pages/services/backend/admin-backend.service';
import { CropperDialogResult, EditImageComponent } from '../../editImage/component/edit-image.component';
import { filter } from 'rxjs';
import { Photo } from '../../../../interfaces/Photo';


@Component({
  selector: 'modal-create-product',
  templateUrl: './create-product.modal.component.html',
  styleUrls: ['./create-product.modal.component.scss']
})
export class CreateProductModalComponent implements OnInit{
  form!: FormGroup;
  mainPhoto?: Photo;
  otherPhotos: Photo[] = [];
  private height: number = 337;
  private width: number = 254;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private adminBackendService: AdminBackendService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      discount: ['', [Validators.required, Validators.min(0)]],
      currency: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
    });
  }

  onSubmit(): void {
    if (this.form.valid && this.mainPhoto) {
      const filesArray: Blob[] = [];
      this.otherPhotos.forEach((photo: Photo) => {
        filesArray.push(photo.blob);
      });
      this.adminBackendService.addNewProduct(this.form, this.mainPhoto.blob, filesArray)
        .subscribe((res: any) => {
          
        });
    } else {
      this.markFormGroupTouched(this.form);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  fileSelected(event: any) {
    const file = event.target?.files[0];
    if (file) {
      const dialogRef = this.dialog.open(EditImageComponent, {
        data: {
          image: file,
          width: this.width,
          height: this.height,
        },
        width: '500px',
      });

      dialogRef
        .afterClosed()
        .pipe(filter((result) => !!result))
        .subscribe((result: CropperDialogResult) => {
          this.uploadImage(result.blob, result.imageUrl);
        });
    }
  }

  onOtherPhotosSelected(event: Event) {
    if(this.otherPhotos.length <= 4 || !this.otherPhotos) {
      const fileList = (event.target as HTMLInputElement).files;
      if (fileList && fileList.length > 0) {
        for (let i = 0; i < fileList.length; i++) {
          if(this.otherPhotos.length <= 4) {
            const file = fileList[i];
            const dialogRef = this.dialog.open(EditImageComponent, {
              data: {
                image: file,
                width: this.width,
                height: this.height,
              },
               width: '500px',
            });

            dialogRef
              .afterClosed()
              .pipe(filter((result) => !!result))
              .subscribe((result: CropperDialogResult) => {
                this.otherPhotos.push({
                  blob: result.blob,
                  url: result.imageUrl,
                });
              });
          }
        }
      }
    }
  }

  // onOtherPhotosSelected(event: Event) {
  //   if(this.otherPhotos.length <= 4 || !this.otherPhotos) {
  //     const fileList = (event.target as HTMLInputElement).files;
  //     if (fileList && fileList.length > 0) {
  //       for (let i = 0; i < fileList.length; i++) {
  //         if(this.otherPhotos.length <= 4) {
  //           const file = fileList[i];
  //           this.otherPhotos.push({ url: URL.createObjectURL(file) });
  //         }
  //       }
  //     }
  //   }
  // }

  uploadImage(blob: Blob, url: string) {
    if(blob) {
      this.mainPhoto = {
        blob: blob,
        url: url
      };
    }
  }

  deleteMainPhoto() {
    this.mainPhoto = undefined;
  }

  deleteOtherPhoto(index: number) {
    if (index !== -1) {
      this.otherPhotos.splice(index, 1);
    }
  }

  openResizeDialog(imageUrl: string): void {
    const dialogRef = this.dialog.open(EditImageComponent, {
      width: '500px',
      data: { url: imageUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
}
