import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatSlideToggleModule,
  MatDividerModule,
  MatExpansionModule,
  MatChipsModule,
  MatSelectModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatExpansionModule,
    MatChipsModule,
    MatSelectModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatExpansionModule,
    MatChipsModule,
    MatSelectModule,
  ],
})
export class MaterialModule { }
