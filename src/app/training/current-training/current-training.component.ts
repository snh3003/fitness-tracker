import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css'],
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  trainingStatus = 'Training in progress';
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.progress === 100) {
        this.trainingStatus = 'Training completed';
      }
      this.progress = (this.progress + Math.floor(Math.random() * 5)) % 100;
    }, 1000);
  }
}
