import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class LessonsPage {
  lessons = [
    {
      id: 1,
      title: 'Lección 1',
      description: 'Ecuaciones Lineales',
      status: 'red'
    },
    {
      id: 2,
      title: 'Lección 2',
      description: 'Propiedad de Multiplicación',
      status: 'green'
    },
    {
      id: 3,
      title: 'Lección 3',
      description: 'División de Polinomios',
      status: 'green'
    }
  ];
}
