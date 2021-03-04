import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WowTokenComponent } from './components/wow-token.component';

const routes: Routes = [
  { path: '', component: WowTokenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WowTokenRoutingModule { }
