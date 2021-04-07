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
<<<<<<< HEAD
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
=======

    ngOnInit() {
        this.items = [
            {
                label:'File',
                icon:'pi pi-fw pi-file',
                items:[
                    {
                        label:'New',
                        icon:'pi pi-fw pi-plus',
                        items:[
                        {
                            label:'Bookmark',
                            icon:'pi pi-fw pi-bookmark'
                        },
                        {
                            label:'Video',
                            icon:'pi pi-fw pi-video'
                        },

                        ]
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-trash'
                    },
                    {
                        separator:true
                    },
                    {
                        label:'Export',
                        icon:'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label:'Edit',
                icon:'pi pi-fw pi-pencil',
                items:[
                    {
                        label:'Left',
                        icon:'pi pi-fw pi-align-left'
                    },
                    {
                        label:'Right',
                        icon:'pi pi-fw pi-align-right'
                    },
                    {
                        label:'Center',
                        icon:'pi pi-fw pi-align-center'
                    },
                    {
                        label:'Justify',
                        icon:'pi pi-fw pi-align-justify'
                    },

                ]
            },
            {
                label:'Users',
                icon:'pi pi-fw pi-user',
                items:[
                    {
                        label:'New',
                        icon:'pi pi-fw pi-user-plus',

                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-user-minus',

                    },
                    {
                        label:'Search',
                        icon:'pi pi-fw pi-users',
                        items:[
                        {
                            label:'Filter',
                            icon:'pi pi-fw pi-filter',
                            items:[
                                {
                                    label:'Print',
                                    icon:'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon:'pi pi-fw pi-bars',
                            label:'List'
                        }
                        ]
                    }
                ]
            },
            {
                label:'Events',
                icon:'pi pi-fw pi-calendar',
                items:[
                    {
                        label:'Edit',
                        icon:'pi pi-fw pi-pencil',
                        items:[
                        {
                            label:'Save',
                            icon:'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label:'Delete',
                            icon:'pi pi-fw pi-calendar-minus'
                        },

                        ]
                    },
                    {
                        label:'Archieve',
                        icon:'pi pi-fw pi-calendar-times',
                        items:[
                        {
                            label:'Remove',
                            icon:'pi pi-fw pi-calendar-minus'
                        }
                        ]
                    }
                ]
            },
            {
                label:'Quit',
                icon:'pi pi-fw pi-power-off'
            }
        ];
    }
}
>>>>>>> b570e69a2b6dddb01fbe998b53254a305a666fcf
