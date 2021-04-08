import { Projet } from './projets/Projet';
import { Projets } from './projets/data-projets';
import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {
    items: MenuItem[];

    projects : MenuItem[] = [ {
      label : 'Afficher tout',
      icon : 'pi pi-list',
      routerLink : ['/projets']
    },
  /* {
    label: 'Ajouté un projets',
    icon : 'far fa-plus-square',
    routerLink : ['/newProjets']
  }, */
  {
    separator : true
  },

]

    ngOnInit(){

        Projets.forEach(element => {
          this.projects.push (
            {label : element.id + ' >> ' + element.title,
            routerLink: ['/projets/' + element.id],
            escape : true
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
            icon : 'fas fa-archive',
            style : 'color : red',
            items: this.projects
          }
        ]
      }
    }
