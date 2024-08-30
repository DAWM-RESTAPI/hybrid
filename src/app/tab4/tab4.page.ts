import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonNav, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [ IonNav, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Tab4Page implements OnInit {

  component = MainComponent;
  
  constructor() { }

  ngOnInit() {
  }

}
