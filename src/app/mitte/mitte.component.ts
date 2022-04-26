import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mitte',
  templateUrl: './mitte.component.html',
  styleUrls: ['./mitte.component.css']
})
export class MitteComponent implements OnInit {

  constructor() { }

ausblenden() {

document.getElementById("x").style.visibility = "hidden";
};


  ngOnInit() {
  }

}