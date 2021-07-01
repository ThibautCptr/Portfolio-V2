import { ProjetsComponent } from './../projets/projets.component';
import { Projets } from './../projets/data-projets';
import { Component, OnInit } from '@angular/core';
import { Projet } from '../projets/Projet';

@Component({
  selector: 'app-index',
  template: `

  <div class="p-grid p-ai-center">
    <div class="header_content p-col">
      <h2> - BIENVENUE SUR MON PORTFOLIO - </h2>
    </div>
  </div>

<div class="p-grid p-ai-center vertical-container content">
<div class="p-grid">
    <div class="p-col">
        <p-panel icons="fas fa-dice-one" header="Dernier projets">
        <div class="p-grid p-ai-start vertical-container">
              <div class="p-col" style="margin-top : -35px">
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
            <div class="p-col p-as-start">
              <button class="git_link" pButton pRipple type="button" label="En savoir plus" class="p-button-raised p-mb-8" icon="pi pi-angle-double-right" routerLink="/projets/{{p.id}}">
              </button>
            </div>
            <div class="p-col p-as-end">
                <button class="git_link" pButton pRipple type="button" label="Voir le projet" class="p-button-raised" icon="pi pi-github" style="float : right" (click)="redirectLink(p.git_link)">
                </button>
            </div>
          </div>
          <p-divider align="center" type="solid">
          </p-divider>
            <button style="margin-left : 35%" class="git_link" pButton pRipple type="button" label="Listes des projets" class="p-button-raised" icon="pi pi-angle-double-left" routerLink="/projets">
              </button>
        </p-panel>
    </div>
    <div class="p-col">
        <p-panel header="Me contacter">
            <p class="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </p-panel>
    </div>
</div>
</div>
  `,
  styles: [
    `

.list_img {
  border: #929292ec 3px solid;
  width: calc(100% - 60%);
  height: calc(100% - 40%);
  margin-right: 25px;
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



.header_content {
  margin: 40px 25%;
  padding : 15px;
  background-color : white;
  text-align: center;
  width : 20%;
  border : 5px #ecececec;
  border-style: inset;
  border-radius : 30px;
}


.content {
  margin-left: 20%;
  margin-right: 20%;
  margin-top : 2%;
}

.box_content {
  background-color: var(--surface-e);
            text-align: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
            border-radius: 4px;
            box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}
    `
  ]
})
export class IndexComponent implements OnInit {

  projets : Projet[] = Projets;

  p : Projet = this.projets[Projets.length - 1];

  static displayBasic: boolean = true;


  constructor() { }

  ngOnInit(): void {

  }

  getStaticDisplayBasic() : boolean {
    return IndexComponent.displayBasic;
  }

  setStaticDisplayBasic() : void{
    IndexComponent.displayBasic = false;
  }

  redirectLink(link) {
    window.open(link);
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
