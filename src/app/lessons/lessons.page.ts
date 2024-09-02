import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

/* 3. Importe del método http */
import { HttpClientModule } from '@angular/common/http';

/* 4. Importe de la interfaz */
import { Data } from '../interfaces/data';

/* 5. Importe del servicio */
import { ProviderService } from '../services/provider.service';

/* 6. Importe lo constructores de formulario */
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule, HttpClientModule, ReactiveFormsModule,
    CommonModule
  ],
  providers: [ProviderService]
})
export class LessonsPage {

  public data : Data[] = [];
  /* 10. Formulario reactivo */
  checkoutForm = this.formBuilder.group({
    texto: ''
  });

  constructor(private dataProvider: ProviderService , private formBuilder: FormBuilder) { }
  
  /* 12. Ejecución de la petición y suscripción de la respuesta */
  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.dataProvider.getResponse().subscribe( response => {
      console.log(response);
      if( response != null) {
        this.data = Object.values(response) as Data[]
      }
        
    })
  }

  /* 13. Callback para el envío de datos */
  onSubmit(): void {
    this.dataProvider.postResponse(this.checkoutForm.value).subscribe( (response) => {
            this.checkoutForm.reset();
            this.loadData()
    })
  }
  
  
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

