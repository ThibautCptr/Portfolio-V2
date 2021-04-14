import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { AjoutProjetsComponent } from './ajout-projets/ajout-projets.component';
import { ProjetsComponent } from './projets/projets.component';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '' ,component: IndexComponent},
  {path : 'about', component : AboutMeComponent},
  {path : 'projets', component : ProjetsComponent},
  {path : 'projets/:id', component : ProjetsComponent},
  {path : 'newProjets',component : AjoutProjetsComponent},
  {path : 'contact',component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
