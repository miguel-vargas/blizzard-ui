import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'migs-tech-error-panel',
  templateUrl: './error-panel.component.html',
  styleUrls: ['./error-panel.component.scss']
})
export class ErrorPanelComponent implements OnInit {
  @Output() refreshEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  refreshData(): void {
    this.refreshEvent.emit();
  }

}
