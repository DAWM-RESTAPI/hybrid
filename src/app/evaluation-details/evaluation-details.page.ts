import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonFab, IonFabButton, IonIcon, IonImg, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-evaluation-details',
  templateUrl: './evaluation-details.page.html',
  styleUrls: ['./evaluation-details.page.scss'],
  standalone: true,
  imports: [CommonModule, IonFab, IonFabButton, IonIcon, IonImg, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EvaluationDetailsPage {

  constructor(public photoService: PhotoService) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

}
