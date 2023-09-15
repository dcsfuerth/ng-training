import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModulebComponent } from './moduleb.component';


const routes: Routes = [
  { path: '', component: ModulebComponent }
];

@NgModule({
  declarations: [
    ModulebComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModulebModule { }
