import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  @Input()
  title: string;


  constructor() { }

  ngOnInit(): void {
  }

}
