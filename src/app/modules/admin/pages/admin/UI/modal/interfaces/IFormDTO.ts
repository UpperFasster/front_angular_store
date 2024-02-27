import { AbstractControl } from "@angular/forms";

export interface IFormDTO {
  name: AbstractControl;
  price: AbstractControl;
  discount: AbstractControl;
  currency: AbstractControl;
  photo: AbstractControl;
}
