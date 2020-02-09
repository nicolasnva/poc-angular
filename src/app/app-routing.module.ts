import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoveComponent } from './love/love.component';


const routes: Routes = [
  { path: 'love', component: LoveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
