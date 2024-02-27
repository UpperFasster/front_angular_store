import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AdminBackendService } from '../../services/backend/admin-backend.service';
import { ModalService } from '../UI/modal/service/modalHandler/modal.service';
import { IProduct } from 'src/app/modules/interfaces/IProduct';
import { Sort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmActionComponent } from 'src/app/modules/UI/confirm-action-dialog/component/confirm-action.component';

@Component({
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  sortedData?: IProduct[];
  selectedItems: Set<IProduct> = new Set<IProduct>();
  pageSize = 5;
  currentPage = 1;

  constructor(
    private backendService: AdminBackendService,
    private modalService: ModalService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  newProduct(): void {
    this.modalService.openCreateProductDialog();
  }

  editProduct(product: IProduct) {
    this.modalService.openEditProductDialog(product);
  }

  plus(number: number) {
    if((this.currentPage + number) > 0) {
      this.currentPage += number;
    }  
  }

  fixPagination() {
    this.currentPage = 1;
  }

  getDisplayedIndex(index: number): number {
    return (this.currentPage - 1) * this.pageSize + index + 1;
  }

  getComparePage(): number {
    if(this.sortedData) {
      return Math.ceil(this.sortedData.length / this.pageSize);
    }
    return 0;
  }

  addAllItemsToSelectedItems(): void {
    this.sortedData?.forEach((product: IProduct) => {
      this.selectedItems.add(product);
    });
  }

  deleteAllItemsFromSelectedItems(): void {
    this.selectedItems.clear();
  }

  refresh(): void {
    this.backendService.getAllData()
      .subscribe((response: IProduct[]) => {
        this.sortedData = response;
      })
  }

  deleteItem(item_id: string, id: number): void {
    const dialogRef = this.dialog.open(ConfirmActionComponent, {
      width: '300px',
    });

    dialogRef.afterClosed()
      .subscribe((result: boolean) => {
      if (result) {
        
        this.backendService.deleteProduct(item_id, id)
          .subscribe((res: any) => {
            this.refresh();
          });
      }
    });
  }

  likeItem(item_id: string): void {
    this.backendService.likeProduct(item_id);
  }

  sortData(sort: Sort) {
    const data = this.sortedData?.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data?.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'price':
          return this.compare(a.price, b.price, isAsc);
        case 'discount':
          return this.compare(a.discount, b.discount, isAsc);
        default:
          return 0;
      }
    });
  }

  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
