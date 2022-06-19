import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from '../stop-training/stop-training.component';
import { TrainingService } from '../training/training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css'],
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter<void>();
  progress = 0;
  timer: number;
  trainingStatus = 'Training in progress';
  constructor(
    public dialog: MatDialog,
    private trainingService: TrainingService
  ) {}

  ngOnInit(): void {
    this.startOrStop();
  }

  startOrStop() {
    const step =
      (this.trainingService.getRunningExercise().duration / 100) * 1000;
    this.timer = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(this.timer);
        this.trainingService.completeExercise();
        this.trainingStatus = 'Training completed';
      } else {
        this.progress = this.progress + 1;
      }
    }, step);
  }

  onStop() {
    clearInterval(this.timer);
    this.trainingStatus = 'Training stopped';
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: { progess: this.progress },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrStop();
      }
    });
  }
}
