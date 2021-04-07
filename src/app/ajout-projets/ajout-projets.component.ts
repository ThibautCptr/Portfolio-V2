import { Component, OnInit } from '@angular/core';
import { Status } from './status';

@Component({
  selector: 'app-ajout-projets',
  template: `
    <div class="p-fluid p-formgrid p-grid form">
        <div class="p-field p-col-12">
          <p-divider align="center" type="dashed">
            <div class="p-d-inline-flex p-ai-center">
                <i class="pi pi-user p-mr-2"></i>
                <b>Ajout d'un projets</b>
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
          <p-dropdown [options]="status" [(ngModel)]="selectedStatus" editable="true" optionLabel="name"></p-dropdown>

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


  selectedStatus : Status;

  status : Status[] = [
    {name : "En cours"},
    {name : "Terminé"}
  ];

  constructor() {

  }

  ngOnInit(): void {
  }
}
