import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProviderService } from '../services/provider.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,  // Asegúrate de importar IonicModule aquí
    CommonModule,
    FormsModule,
    RouterModule, HttpClientModule,
  ],
  providers: [ProviderService]
})
export class HomePage {



  subjects: any[] = [];

  constructor(private dataProvider: ProviderService, private router: Router) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.dataProvider.getResponse().subscribe( (response: any) => {
      console.log(response);
      if( response != null) {
        this.subjects.push(...response.map((materia: any) => materia));
    }});

    console.log(this.subjects);
    console.log("Hola");
  }

  goToEvaluaciones(materiaId: number) {
    this.router.navigate(['/evaluaciones', materiaId]);
  }

}
