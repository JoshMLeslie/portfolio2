import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit {
  url: string;

  bars = [
    {
      label: 'about',
    },
    {
      label: 'projects'
    },
    {
      label: 'experiments'
    }
  ]

  constructor(router: Router) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(({url}: NavigationEnd) => this.url = url.slice(1, url.length));
  }

  ngOnInit(): void {}
}
