import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ask-question-dialog',
  templateUrl: './ask-question-dialog.component.html',
  styleUrls: ['./ask-question-dialog.component.scss'],
})
export class AskQuestionDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AskQuestionDialogComponent>) {}

  ngOnInit(): void {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

  showValue(): void {
    console.log('value');
  }
}
