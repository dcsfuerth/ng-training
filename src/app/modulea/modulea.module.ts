import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleaComponent } from './modulea.component';

const routes: Routes = [
  { path: '', component: ModuleaComponent }
];

@NgModule({
  declarations: [
    ModuleaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModuleaModule { }
