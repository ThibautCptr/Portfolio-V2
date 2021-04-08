import { Component, OnInit } from '@angular/core';
import { Projets } from '../projets/data-projets';
import { Projet } from '../projets/Projet';
import { Tag } from '../projets/Tag';
import { Status } from './status';

@Component({
  selector: 'app-ajout-projets',
  template: `
    <div class="p-fluid p-formgrid p-grid form">
        <div class="p-field p-col-12">
          <p-divider align="center" type="dashed">
            <div class="p-d-inline-flex p-ai-center">
                <i class="far fa-plus-square fa-2x" style="margin-right : 5px"> </i>
                <b> Ajout d'un projets</b>
            </div>
          </p-divider>
          </div>
        <div class="p-field p-col-12 p-md-6">
            <label for="title">Titre</label>
            <input id="title" type="text" pInputText>
        </div>
        <div class="p-field p-col-12 p-md-6">
            <label for="url_img">URL de l'image</label>
            <input id="url_img" type="text" pInputText>
        </div>
        <div class="p-field p-col-12">
            <label for="desc">Déscription</label>
            <textarea id="desc" type="text" rows="4" pInputTextarea autoResize="autoResize"></textarea>
        </div>
        <div class="p-field p-col-12 p-md-6">
            <label for="git_link">Lien git</label>
            <input id="git_link" type="text" pInputText>
        </div>
        <div class="p-field p-col-12 p-md-6">
          <label for="status">Status</label>
          <p-dropdown [options]="status" [(ngModel)]="selectedStatus" optionLabel="name"></p-dropdown>
        </div>
        <div class="p-field p-col-12 p-md-6">
          <label for="tags">Tags</label>
          <p-multiSelect [options]="tags" [(ngModel)]="selectedTags" defaultLabel="Select a tag" optionLabel="value" display="chip"></p-multiSelect>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <button style="margin-top : 25px" pButton pRipple type="button" label="Submit" (click)="ajouterProjet()"></button>
      </div>
          `,
  styles: [ `
  .form {
    margin: 50px 25%;
  padding : 15px;
  background-color : white;
  }
  `
  ]
})

export class AjoutProjetsComponent implements OnInit {


  selectedStatus: Status = null;
  selectedTags : Tag[];

        status: Status[] = [
            {name: 'En cours'},
            {name: 'Terminé'},
        ];

        tags : Tag[] = [
          {value: 'HTML5', icon: 'fab fa-html5', severity: 'info', color: 'orange', degree : 50 }
        ];

  constructor() {

  }

  ngOnInit(): void {
  }

  ajouterProjet() : void{
      Projets.push(
        {
          id : Projet.cpt,
          title :(document.getElementById('title') as HTMLInputElement).value,
          date : new Date(),
          url_img : (document.getElementById('url_img') as HTMLInputElement).value,
          description : (document.getElementById('desc') as HTMLInputElement).value,
          git_link : (document.getElementById('git_link') as HTMLInputElement).value,
          dl_link : "",
          status: this.selectedStatus.name,
          tag: this.selectedTags
        }
      )

      console.log(Projets)
  }
}
