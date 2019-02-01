import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor() { }

  @Input()
  projName:string;

  @Input()
  pname:string

  ngOnInit() {
  }

}
