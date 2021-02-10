import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixa-de-texto',
  templateUrl: './caixa-de-texto.component.html',
  styleUrls: ['./caixa-de-texto.component.css']
})
export class CaixaDeTextoComponent implements OnInit {
 
  public texto: string;
  onKeyPress(event) {    
    this.texto = event.target.value;
    console.log((event.target.value));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
