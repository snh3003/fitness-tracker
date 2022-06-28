import { NgModule } from '@angular/core';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { TrainingComponent } from './training/training.component';
import { StopTrainingComponent } from './stop-training/stop-training.component';
import { SharedModule } from '../shared/shared.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent,
  ],
  imports: [SharedModule, AngularFireAuthModule, CommonModule, BrowserModule],
  entryComponents: [StopTrainingComponent],
})
export class TrainingModule {}
