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
    </p>
    <div *ngIf="this.projet == null">

    <p-dataView [value]="this.projets">
    <ng-template pTemplate="header">
        <p-dataViewLayoutOptions></p-dataViewLayoutOptions>
    </ng-template>
    <ng-template let-p pTemplate="listItem">
        <div>
        <img [src]="p.url_img" [alt]="p.Title" style="width : 50px" />
                    <div class="product-list-detail">
                        <div class="product-name">{{p.Title}}</div>
                        <div class="product-description">{{p.description}}</div>
                        <p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating>
                        <i class="pi pi-tag product-category-icon"></i><span class="product-category">{{p.status}}</span>
                        <span [class]="'product-badge status-' + product.inventoryStatus.toLowerCase()">{{product.inventoryStatus}}</span>
                    </div>
        </div>
    </ng-template>
    <ng-template let-car pTemplate="gridItem">
        <div class="p-col-12 p-md-3">
            {{p.year}}
        </div>
    </ng-template>
    <ng-template pTemplate="footer">
        <p-dataViewLayoutOptions></p-dataViewLayoutOptions>
    </ng-template>
</p-dataView>


    </div>
  `,
  styles: [ `
  tag_card {
    display : inline;
    positon : absolute;
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
}
