import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DataService } from 'src/app/services/utilities/data.service';

@NgModule({
  declarations: [MainHeaderComponent, SecondaryHeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [MainHeaderComponent, SecondaryHeaderComponent],
  providers: [],
})
export class SharedModule {}
