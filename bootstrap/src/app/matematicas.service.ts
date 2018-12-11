import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatematicasService {

  constructor() { }

  suma(a: number, b: number) {
    return a + b;
  }
}
