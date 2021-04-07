import { Projet } from './projets/Projet';
import { Projets } from './projets/data-projets';
import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {
    items: MenuItem[];

    projects : MenuItem[] = [ {
      label : 'Afficher touts',
      routerLink : ['/projets']
    },
  {separator : true}]

    ngOnInit(){

        Projets.forEach(element => {
          this.projects.push (
            {label : element.Title,
            routerLink: ['/projets/' + element.id],
            }
          )
        });


        this.items = [
          {
            label : '<h3>PORTFOLIO</h3>',
            escape : false,
            routerLink: ['/'],
            styleClass:'title',

          },
          {
              label:'A propos de moi',
              icon:'pi pi-fw pi-user',
              routerLink: ['/about'],
              style : 'color : red',
          },
          {
            label:'Projets',
            icon:'pi pi-fw pi-users',
            style : 'color : red',
            items: this.projects
          }
        ]
      }
    }
