import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AboutMeComponent } from './about-me/about-me.component';
import { DividerModule } from 'primeng/divider';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { ProjetsComponent } from './projets/projets.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import { TagModule } from 'primeng/tag';
import {DataViewModule} from 'primeng/dataview';
import { Chip, ChipModule } from 'primeng/chip';
import { AjoutProjetsComponent } from './ajout-projets/ajout-projets.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProjetsComponent,
    AjoutProjetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DividerModule,
    BreadcrumbModule,
    MessagesModule,
    MessageModule,
    CardModule,
    TagModule,
    DataViewModule,
    ChipModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
