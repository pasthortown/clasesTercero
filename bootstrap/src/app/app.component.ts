import { MatematicasService } from './matematicas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  resultado: number;

  constructor(private matematicas: MatematicasService) {
    this.resultado = this.matematicas.suma(4, 5);
  }

}
