import { FormControl, Validators } from "@angular/forms";
import { SignInDTO } from "src/app/modules/auth/services/DTO/SigninDTO";

export class LoginForm {
  email: FormControl = new FormControl(null, [Validators.required, Validators.email]);
  password: FormControl = new FormControl(null, [Validators.required, Validators.minLength(8)]);

  isValid(): boolean {
    return this.email.valid && this.password.valid;
  }

  getDto(): SignInDTO  {
    return {
      email: this.email.value,
      password: this.password.value,
    };
  }
}