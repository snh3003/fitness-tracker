import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule],
  exports: [MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule],
})
export class MaterialModule {}
