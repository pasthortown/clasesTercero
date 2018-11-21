import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej2',
  templateUrl: './ej2.component.html',
  styleUrls: ['./ej2.component.css']
})
export class Ej2Component implements OnInit {
  respuesta = [];
  valor = 0;
  constructor() { }

  ngOnInit() {
  }

  calcular() {
    this.obtenerFactorial(this.valor);
  }
  obtenerFactorial(valor) {
    const lista = [];
    let total = 0;
    let valorU = 1;
    let valorActual = 0;
    for (let x = 1; x <= valor; x++) {
      total = valorActual + valorU;
      valorU = valorActual;
      valorActual = total;
      lista.push(total);
    }
    this.respuesta = lista;
  }


}
