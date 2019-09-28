import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Route } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AbasPage } from './abas.page';

const routes: Routes = [
  {
    path: 'abas',
    component: AbasPage,
    children: []
  },
  {
    path: 'aba1',
    children: []
  },
  {
    path: 'aba2',
    children: []
  },
  {
    path: 'aba2',
    children: []
  }
];

//const routes: Routes = [
//  {
//    path: '',
//    component: AbasPage
//  }
//];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbasPage]
})
export class AbasPageModule { }
