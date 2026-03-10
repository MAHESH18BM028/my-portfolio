import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('../pages/about/about-component').then(m => m.AboutComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('../pages/skills/skills-component').then(m => m.SkillsComponent)
  },
  
];
