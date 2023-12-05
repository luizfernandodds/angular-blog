import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.css']
})
export class SlideCardComponent implements OnInit {

  @Input()
  photoCover:string = '';
  @Input()
  title:string = '';
  @Input()
  description:string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
