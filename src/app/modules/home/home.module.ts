import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskQuestionDialogComponent } from './components/ask-question-dialog/ask-question-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, AskQuestionDialogComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
