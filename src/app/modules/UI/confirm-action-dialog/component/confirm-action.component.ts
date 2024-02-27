import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-confirm-action",
  templateUrl: "./confirm-action.component.html",
  styleUrls: ["./confirm-action.component.scss"]
})

export class ConfirmActionComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
