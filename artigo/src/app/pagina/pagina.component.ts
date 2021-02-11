import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagina',
    templateUrl: './pagina.component.html',
    styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

    public titulo: string;
    public texto: string;

    constructor() {}

    ngOnInit() {

      this.titulo = 'O que são Components no Angular?';
      this.texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nibh mauris cursus mattis molestie a iaculis at erat.
                    Ipsum dolor sit amet consectetur adipiscing elit ut aliquam
                    purus. Egestas tellus rutrum tellus pellentesque eu tincidunt
                    tortor aliquam nulla. In dictum non consectetur a erat nam at.
                    Enim ut sem viverra aliquet eget sit amet tellus cras.
                    Fames ac turpis egestas integer. Odio pellentesque diam volutpat
                    commodo sed egestas. Augue lacus viverra vitae congue eu consequat
                    ac. Et malesuada fames ac turpis egestas maecenas pharetra convallis.
                    Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    Sollicitudin tempor id eu nisl nunc mi ipsum faucibus.`

    }

}