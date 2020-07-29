import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-button',
  templateUrl: './bar-button.component.html',
  styleUrls: ['./bar-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarButtonComponent implements OnInit {
  @Input() label: string;
  @Input() positioning: {
    side: 'left' | 'right' | 'up' | 'down';
    offset: number;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  barClicked() {
    this.router.navigate([this.label])
  }

}
