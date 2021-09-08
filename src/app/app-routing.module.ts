import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayingCardComponent } from './playing-card/playing-card.component';

const routes: Routes = [
  { path: '', component:  PlayingCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
