import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {
  respuesta = 0;
  numero = 1;
  constructor() { }

  ngOnInit() {
  }

  factorial(numero: number) {
    if (numero == 1 ) {
      return 1;
    }
    return numero * this.factorial(numero - 1);
  }

  calcular() {
    this.respuesta = this.factorial(this.numero);]
  }
}
