import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
<<<<<<< HEAD
import { AboutMeComponent } from './about-me/about-me.component';
import { DividerModule } from 'primeng/divider';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { ProjetsComponent } from './projets/projets.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import { TagModule } from 'primeng/tag';
import {DataViewModule} from 'primeng/dataview';

=======
>>>>>>> b570e69a2b6dddb01fbe998b53254a305a666fcf

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProjetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
<<<<<<< HEAD
    ButtonModule,
    DividerModule,
    BreadcrumbModule,
    MessagesModule,
    MessageModule,
    CardModule,
    TagModule,
    DataViewModule
=======
    ButtonModule
>>>>>>> b570e69a2b6dddb01fbe998b53254a305a666fcf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
