import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { MatSnackBarModule, MatInputModule,  MatMenuModule, MatIconModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppConfig } from './app.config';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule
  ],
  declarations: [],
  providers: [AppConfig]
})
export class ShareModule { }
