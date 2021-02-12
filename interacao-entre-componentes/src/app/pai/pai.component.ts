import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  nomes = ['Phil', 'Mark', ' ', 'June'];
  constructor() { }

  ngOnInit(): void {
  }

}
