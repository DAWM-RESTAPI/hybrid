import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProviderService } from '../services/provider.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule],
  providers: [ProviderService]
})
export class EvaluacionesComponent implements OnInit {

  materias: any[] = [];

  constructor(private route: ActivatedRoute, private dataProvider: ProviderService) { }

  ngOnInit() {
    // this.loadEvaluaciones();
  }

  // loadEvaluaciones() {
  //   this.dataProvider.getResponse().subscribe( (response: any) => {
  //     console.log(response);
  //     if( response != null) {
  //       this.materias= response.map((materias: any) => this.materias);
  //   }});
  // }
}