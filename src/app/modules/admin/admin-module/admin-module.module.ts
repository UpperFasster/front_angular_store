import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminPanelComponent } from '../pages/admin/component/admin-panel.component';
import { TestPageComponent } from '../pages/TestPage/test-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductModalComponent } from '../pages/admin/UI/modal/editProduct/component/edit-product.modal.component';
import { CreateProductModalComponent } from '../pages/admin/UI/modal/createProduct/component/create-product.modal.component';
import { ModalService } from '../pages/admin/UI/modal/service/modalHandler/modal.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSortModule } from '@angular/material/sort'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ImageCropperModule } from 'ngx-image-cropper';
import { EditImageComponent } from '../pages/admin/UI/modal/editImage/component/edit-image.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmActionComponent } from '../../UI/confirm-action-dialog/component/confirm-action.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    TestPageComponent,
    AdminPanelComponent,
    EditProductModalComponent,
    CreateProductModalComponent,
    EditImageComponent,
    ConfirmActionComponent,
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    ImageCropperModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
  ],
  providers: [
    ModalService,
  ]
})
export class AdminModuleModule { }
