import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenavlist',
  templateUrl: './sidenavlist.component.html',
  styleUrls: ['./sidenavlist.component.css']
})
export class SidenavlistComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();

  onClose() {
    this.sidenavToggle.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
