import { AppComponent } from './../app.component';
import { Projet } from './Projet';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projets } from './data-projets';
import { Message, MessageService } from 'primeng/api';
import { Tag } from './Tag';

@Component({
  selector: 'app-projets',
  template: `


    <div *ngIf="this.projet != null">
    <div class="p-grid">
        <div class="list_projets p-shadow-6 p-col p-as-center" style="text-align :center">

        <p-divider align="center" type="solid">
            <div class="p-d-inline-flex p-ai-center">
            <i class="fas fa-archive fa-2x" style="margin-right : 5px"> </i>
                <h1>{{this.projet.title}}</h1>
            </div>
          </p-divider>
          <img src="{{this.projet.url_img}}" class="detail_img">
          <h2>{{getDate(this.projet)}}</h2>
          <div class="p-grid p-jc-center status" style="padding-top : 20px">
              <div *ngIf="this.projet.status == 'En cours'">
                <p-tag styleClass="p-mr-2" value="{{this.projet.status}}"></p-tag>
              </div>
              <div *ngIf="this.projet.status == 'Terminé'">
                <p-tag styleClass="p-mr-2" severity="danger" value="{{this.projet.status}}"></p-tag>
              </div>
            </div>
          <p-divider align="center" type="solid">
            <div class="p-d-inline-flex p-ai-center">
            <i class="fas fa-file-alt fa-2x" style="margin-right : 5px"> </i>
                <h1>Déscription</h1>
            </div>
          </p-divider>
          <p>{{this.projet.description}}</p>


            <p-divider align="center" type="solid">
              <div class="p-d-inline-flex p-ai-center">
              <i class="far fa-images fa-2x" style="margin-right : 5px"> </i>
                  <h1>Aperçu</h1>
              </div>
            </p-divider>
            <div *ngFor="let s of this.projet.screen" style="margin: 0% 0% 0% 30%; display : inline">
              <img src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg" class="detail_img_aperçu">
              <img src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg" class="detail_img_aperçu">
              <img src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg" class="detail_img_aperçu">
            </div>

          <p-divider align="center" type="solid">
            <div class="p-d-inline-flex p-ai-center">
            <i class="fas fa-code-branch fa-2x" style="margin-right : 5px"> </i>
                <h1>Compétence requise</h1>
            </div>
          </p-divider>
            <div class="p-grid p-formgrid p-text-center">
              <div class="p-field p-col-12 p-md-4" *ngFor="let tag of this.projet.tag">
                <i class="{{tag.icon}}" style="color : {{tag.color}}"></i>
                {{tag.value}}
                <p-knob [(ngModel)]="tag.degree" valueTemplate="{value}%" valueColor="MediumTurquoise" rangeColor="SlateGray" [readonly]="true"></p-knob>
              </div>
            </div>
          <p-divider align="center" type="solid">
            <div class="p-d-inline-flex p-ai-center">
            <i class="fas fa-link fa-2x" style="margin-right : 5px"> </i>
                <h1>Liens</h1>
            </div>
          </p-divider>

          <div class="p-grid p-jc-center">
            <div class="p-col-2 p-md-4">
              <button class="git_link" pButton pRipple type="button" label="Télécharger le projet" class="p-button-raised p-mb-8" icon="fas fa-download" (click)="redirectLink(this.projet.dl_link)">
              </button>
            </div>
            <div class="p-col-2 p-md-4">
                <button class="git_link" pButton pRipple type="button" label="Voir le projet" class="p-button-raised" icon="pi pi-github" style="float : right" (click)="redirectLink(this.projet.git_link)">
                </button>
            </div>
          </div>

          <p-divider align="center" type="solid">
          </p-divider>
            <div class="p-col p-as-end">
            <button class="git_link" pButton pRipple type="button" label="Retour a la listes des projets" class="p-button-raised" icon="pi pi-angle-double-left" routerLink="/projets">
              </button>
          </div>
        </div>

      </div>

    </div>
    <div *ngIf="this.projet == null">
      <div class="p-grid">
          <div class="list_projets p-shadow-6 p-col p-as-center">
            <p-divider align="center" type="solid">
              <div class="p-d-inline-flex p-ai-center">
              <i class="fas fa-archive fa-2x" style="margin-right : 5px"> </i>
                  <h1>Liste des projets</h1>
              </div>
            </p-divider>
            <div class="p-grid p-ai-end vertical-container" style="text-align : center">
              <div class="p-col">
                <button id="tri_button_nom" pButton pRipple type="button" label="Trié par nom" class="p-button-raised p-mb-8" icon="{{this.iconTri}}" (click)="sortNom()">
                </button>
              </div>
              <div class="p-col">
              <button id="tri_button_date" pButton pRipple type="button" label="Trié par date" class="p-button-raised p-mb-8" icon="{{this.iconTriDate}}" (click)="sortDate()">
                </button>
              </div>

            </div>
          </div>
      </div>


      <div *ngFor="let p of this.projets" class="p-grid">
        <div class="list_projets p-shadow-6 p-col p-as-center">
          <div class="p-grid p-ai-start vertical-container">
            <div class="p-col">
                <h3 class="header-item">{{p.title}}</h3>
                <h2>{{getDate(p)}}</h2>
            </div>
            <div class="p-grid p-jc-end status" style="padding-top : 20px">
              <div *ngIf="p.status == 'En cours'">
                <p-tag styleClass="p-mr-2" value="{{p.status}}"></p-tag>
              </div>
              <div *ngIf="p.status == 'Terminé'">
                <p-tag styleClass="p-mr-2" severity="danger" value="{{p.status}}"></p-tag>
              </div>
            </div>
          </div>
          <img class="list_img" alt="Card" src="{{p.url_img}}">
          <p>{{p.description}}</p>

          <div class="p-grid">
            <div *ngFor="let tag of p.tag" class="tag">

              <div class="p-col">
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
  margin: 40px 25%;
  padding : 15px;
  background-color : white;
}

.list_img {
  border: #929292ec 3px solid;
  width: calc(100% - 60%);
  height: calc(100% - 40%);
  margin-right: 25px;
  margin-bottom: 15px;
  float : left;

}

.detail_img_aperçu {
  border: #929292ec 3px solid;
  width: 375px;

  margin-right: 5%;
  margin-bottom: 15px;
  float : left;

}
.detail_img {
  border: #929292ec 3px solid;
  width: calc(100% - 60%);
  height: calc(100% - 40%);
  margin-right: 25px;
  float : center;

}

.header-item {
    color: #000000;
    opacity: 75%;
    text-shadow: #929292ec 3px 3px;
    font-size: 36px;
    font-family: revert;
    text-transform: uppercase;
    letter-spacing: 4px;
    line-height: 35px;

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
  `
  ]
})
export class ProjetsComponent implements OnInit {
  language = AppComponent.language

  projet : Projet = Projet[Projets.length - 1];
  projets : Projet[] = Projets;

  msg : Message;
  iconTri : string = "pi pi-sort-numeric-down";
  iconTriDate : string = "fas fa-sort";
  cptNom : number = 0;
  cptDate : number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.projet = this.search(params.id) );
  }

  ngOnInit(): void {
    this.sortId();
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

  sortId() : Projet[] {
    return this.projets.sort((x:Projet,y:Projet) => {
      if(x.id <= y.id) return 1;
      return -1
    });
  }

  sortNom() : Projet[] {

    if(this.cptNom == 0) {
      this.iconTri = "pi pi-sort-alpha-up"
      this.cptNom++
      return this.projets.sort((x:Projet,y:Projet) => {
        if(x.title <= y.title) return 1;
        return -1
      });
    }

    else if (this.cptNom == 1) {
      this.iconTri = "pi pi-sort-alpha-down"
      this.cptNom++
      return this.projets.sort((x:Projet,y:Projet) => {
        if(x.title <= y.title) return 1;
        return -1
      });
    }

    else if (this.cptNom == 2) {
      this.iconTri = "pi pi-sort-numeric-down"
      this.cptNom = 0
      return this.projets.sort((x:Projet,y:Projet) => {
        if(x.id <= y.id) return 1;
        return -1
      });
    }
  }

  sortDate() : Projet[] {

    if(this.cptDate == 0) {
      this.cptDate++
      return this.projets.sort((x:Projet,y:Projet) => {
        if(x.date >= y.date) return 1;
        return -1
      });
    }

    else if (this.cptDate == 1) {
      this.cptDate = 0
      return this.projets.sort((x:Projet,y:Projet) => {
        if(x.date <= y.date) return 1;
        return -1
      });
    }
  }

  getDate(p : Projet) : string {
    switch(p.date.getMonth()) {
      case(0) :
        return "Janvier " + p.date.getFullYear();
      case(1) :
        return "Février " + p.date.getFullYear();
      case(2) :
        return "Mars " + p.date.getFullYear();
      case(3) :
        return "Avril " + p.date.getFullYear();
      case(4) :
        return "Mai " + p.date.getFullYear();
      case(5) :
        return "Juin " + p.date.getFullYear();
      case(6) :
        return "Juillet " + p.date.getFullYear();
      case(7) :
        return "Aout " + p.date.getFullYear();
      case(8) :
        return "Septembre " + p.date.getFullYear();
      case(9) :
        return "Octobre " + p.date.getFullYear();
      case(10) :
        return "Novembre " + p.date.getFullYear();
      case(11) :
        return "Décembre " + p.date.getFullYear();

    }

  }
}
