import { Projet } from './projets/Projet';
import { Projets } from './projets/data-projets';
import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls : ["./app.component.css"]
})


export class AppComponent {

    static cptProjet : number = 0


    static language : string = "FR";

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
      AppComponent.cptProjet = 1
        Projets.forEach(element => {

          this.projects.push (
            {label : element.title,
            icon : "fas fa-dice-" + numberToText(AppComponent.cptProjet),
            routerLink: ['/projets/' + element.id],
            escape : true
            }
          )
          AppComponent.cptProjet++;
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
              icon:'fas fa-user',
              routerLink: ['/about'],
              style : 'color : red',
          },
          {
            label:'Projets',
            icon : 'fas fa-archive',
            style : 'color : red',
            items: this.projects
          },
          {
            label : 'Contacts',
            icon : 'fas fa-envelope',
            routerLink : ['/contact']
          }
        ]
      }
    }

function numberToText(cptProjet: number) {
  switch(cptProjet) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    }
}

