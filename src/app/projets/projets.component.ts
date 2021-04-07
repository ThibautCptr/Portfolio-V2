import { Projet } from './Projet';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projets } from './data-projets';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-projets',
  template: `
    <p *ngIf="this.projet != null">
      {{this.projet.Title}}

      <button class="git_link" pButton pRipple type="button" label="Retour a la listes des projets" class="p-button-raised" icon="pi pi-angle-double-left" routerLink="/projets">
          </button>

    </p>
    <div *ngIf="this.projet == null">

      <div *ngFor="let p of this.projets" class="p-grid">
        <div class="list_projets p-shadow-6 p-col p-as-center">
          <div class="p-grid p-ai-start vertical-container">
            <div class="p-col">
                <h3 class="header-item">{{p.Title}}</h3>
            </div>
            <div class="p-col-2 status" style="padding-top : 20px">
              <div *ngIf="p.status == 'En cours'">
                <p-tag styleClass="p-mr-2" value="{{p.status}}"></p-tag>
              </div>
              <div *ngIf="p.status == 'Terminé'">
              <p-tag styleClass="p-mr-2" severity="danger" value="{{p.status}}"></p-tag>
              </div>
            </div>
          </div>
          <img alt="Card" src="{{p.url_img}}">
          <p>{{p.description}}</p>

          <div *ngFor="let tag of p.Tag" class="tag">
            <div class="p-grid">
              <div class="p-col-12 p-md-6 p-lg-3">
              <p-chip label="{{tag.value}}" icon="{{tag.icon}}" styleClass="p-mr-2 custom-chip icon-color-{{tag.color}}"></p-chip>
              </div>

            </div>
          </div>

          <div class="p-grid vertical-container">
            <div class="p-col p-as-end">
              <button class="git_link" pButton pRipple type="button" label="En savoir plus" class="p-button-raised p-mb-8" icon="pi pi-angle-double-right" routerLink="/projets/{{p.id}}">
              </button>
            </div>
            <div class="p-col p-as-end">
              <button class="git_link" pButton pRipple type="button" label="Voir le projet" class="p-button-raised" icon="pi pi-github" style="float : right" (click)="redirectLink(p.git_link)">
              </button>
            </div>
          </div>


          </div>
        </div>
      </div>

  `,
  styles: [ `
.list_projets {
  margin: 50px 25%;
  padding : 15px;
  background-color : white;
  width : 50%;
}

.list_projets img {
  border: #929292ec 3px solid;
  width: calc(100% - 60%);
  height: calc(100% - 40%);
  margin-right: 25px;
  align-items: center;
  float : left;

}

.header-item {
    color: #000000;
    opacity: 75%;
    text-shadow: #929292ec 3px 3px;
    font-size: 36px;
    font-family: revert;
    text-transform: uppercase;
    letter-spacing: 4px;
    line-height: 25px;
}

.tag {
    margin-right: 10px;
    display: inline;
    float : bottom;
}

.list_projets button {
  float : bottom;
  position : relative;
}


.status {
  border-radius: 2px;
    padding: .25em .5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;
}

.icon-color-orange .p-chip{
  color : orange !important;
}
  `
  ]
})
export class ProjetsComponent implements OnInit {

  projet : Projet = Projet[0];
  projets : Projet[] = Projets;

  msg : Message;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.projet = this.search(params.id) );
  }

  ngOnInit(): void {
    this.msg = {severity: 'error' , summary : 'Error' , detail : 'Projets inéxistant'};
  }

  search(id : number) : Projet {
    for (let p of Projets) {
      if(p.id == id) {
        return p;
      }
    }
    return null;
  }

  redirectLink(link) {
    window.open(link);
  }
}
