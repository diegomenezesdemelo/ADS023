import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Aba1Page } from './aba1.page';

const routes: Routes = [
  {
    path: '',
    component: Aba1Page
  },
  {
    path: '',
    loadChildren: '../abas/aba1.module#Aba1PageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Aba1Page]
})
export class Aba1PageModule {}
