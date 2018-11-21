import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej1',
  templateUrl: './ej1.component.html',
  styleUrls: ['./ej1.component.css']
})
export class Ej1Component implements OnInit {
  numerosPrimos = [];
  numero = 0;

  constructor() { }

  ngOnInit() {
  }

  primos(numero) {
  for (let i = 1; i <= numero; i++) {
    if (this.verificarPrimo(i)) {
      console.log(i);
    }
  }
  }
  verificarPrimo(i) {
    for ( let x = 1 ; x = i ; x++) {
      if (i % x === 0) {
        console.log(x);
        return false;
      }
    }
    return true;
  }
  calcular() {
    this.primos(this.numero);
  }

}
