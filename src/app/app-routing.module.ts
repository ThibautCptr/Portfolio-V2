import { AjoutProjetsComponent } from './ajout-projets/ajout-projets.component';
import { ProjetsComponent } from './projets/projets.component';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'about', component : AboutMeComponent},
  {path : 'projets', component : ProjetsComponent},
  {path : 'projets/:id', component : ProjetsComponent},
  {path : 'newProjets',component : AjoutProjetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
