import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input()set nome(nome: string) {
    this.nome = (nome && nome.trim()) || '<Nome em branco>';
  }
  constructor() { }

  ngOnInit(): void {
   
  }

}
