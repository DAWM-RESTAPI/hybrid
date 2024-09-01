import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonicModule,
    RouterModule, // Importa el RouterModule para las rutas
    CommonModule  // Importa el CommonModule para utilizar directivas comunes de Angular
  ]
})
export class AppComponent {}
