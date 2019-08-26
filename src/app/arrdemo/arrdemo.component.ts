import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrdemo',
  templateUrl: './arrdemo.component.html',
  styleUrls: ['./arrdemo.component.css']
})
export class ArrdemoComponent implements OnInit {
arr:string[]=['skycliff', 'hubli', 'darwad'];
  constructor() { }

  ngOnInit() {
  }

}
