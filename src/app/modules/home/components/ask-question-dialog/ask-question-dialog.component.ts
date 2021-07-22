import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ask-question-dialog',
  templateUrl: './ask-question-dialog.component.html',
  styleUrls: ['./ask-question-dialog.component.scss'],
})
export class AskQuestionDialogComponent implements OnInit {
  public visible = true;
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  public categories: any[] = [];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  // @ts-ignore
  public questionForm: FormGroup = null;
  constructor(
    public dialogRef: MatDialogRef<AskQuestionDialogComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.questionForm = this.formBuilder.group({
      questionContent: new FormControl('', [Validators.required]),
      categories: new FormControl('', [Validators.required]),
    });
  }

  public onNoClick(): void {
    this.dialogRef.close({ data: 'closing' });
  }

  showValue(): void {
    console.log('value');
  }

  public add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add category
    if (value) {
      this.categories.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  public remove(category: any): void {
    const index = this.categories.indexOf(category);
    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  public postQuestion(): void {
    this.questionForm.controls.categories.setValue(this.categories);
    if (this.questionForm.valid) {
      console.log('Make API call');
    } else {
      console.log('Throw error');
    }
  }
}
