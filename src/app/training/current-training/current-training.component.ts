import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from '../stop-training/stop-training.component';

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
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.startOrStop();
  }

  startOrStop() {
    this.timer = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(this.timer);
        this.trainingStatus = 'Training completed';
      } else {
        this.progress = (this.progress + Math.floor(Math.random() * 5)) % 100;
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    this.trainingStatus = 'Training stopped';
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: { progess: this.progress },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.trainingExit.emit();
      }else{
        this.startOrStop();
      }
    });
  }
}
