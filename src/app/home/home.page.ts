import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,  // Asegúrate de importar IonicModule aquí
    CommonModule,
    FormsModule,
    RouterModule
  ],
})
export class HomePage {

  subjects = [
    {
      name: 'Inglés - 8A',
      members: '+50',
      image: 'assets/ingles.png'
    },
    {
      name: 'Contabilidad - 8A',
      members: '+50',
      image: 'assets/contabilidad.png'
    },
    {
      name: 'Lenguaje - 8A',
      members: '+50',
      image: 'assets/lenguaje.png'
    },
    {
      name: 'Matemáticas - 8A',
      members: '+50',
      image: 'assets/matematicas.png'
    }
  ];
}
