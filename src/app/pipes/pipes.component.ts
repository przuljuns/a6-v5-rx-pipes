import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  amount = 123.45;
  date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
