import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'lessons',
    loadComponent: () => import('./lessons/lessons.page').then(m => m.LessonsPage),
  },
  {
    path: 'evaluation-details',
    loadComponent: () => import('./evaluation-details/evaluation-details.page').then(m => m.EvaluationDetailsPage),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then(m => m.AboutPage),
  },
  {
    path: 'evaluaciones/:materiaId',
    loadComponent: () => import('./evaluaciones/evaluaciones.component').then(m => m.EvaluacionesComponent)
  }
];
