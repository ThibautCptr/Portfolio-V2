import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  template: `
  <div class="p-fluid p-formgrid p-grid form">
        <div class="p-field p-col-12">
          <p-divider align="center" type="dashed">
            <div class="p-d-inline-flex p-ai-center">
                <i class="fas fa-envelope fa-2x" style="margin-right : 5px"> </i>
                <b> Me contacter </b>
            </div>
          </p-divider>
                <form [formGroup]="FormData" (ngSubmit)="onSubmit(FormData.value)">
                <div class="p-field p-col-12 p-md-6">
                      <label for="Email">Email</label>
                      <input type="email" pInputText class="form-control" name="Email" placeholder="Entrez l'email"formControlName="Email">
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                      <label for="fullname">Nom Complet</label>
                      <input type="text" class="form-control" pInputText name="Fullname" placeholder="Entrez votre nom complet" formControlName="Fullname">
                    </div>
                    <div class="p-field p-col-12">
                      <label for="comment">Message</label>
                      <textarea rows="4" type="text"  pInputTextarea  autoResize="autoResize"class="form-control" formControlName="Comment" name="Comment">
                      </textarea>
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                      <button type="submit" style="margin-top : 25px" pButton pRipple [disabled]="!FormData.valid" type="button" label="Submit"></button>
                    </div>
                </form>
            </div>
          </div>
  `,
  styles: [

    `
  .form {
    margin: 50px 25%;
  padding : 15px;
  background-color : white;
  }
  `
  ]
})
export class ContactComponent implements OnInit {

  FormData : FormGroup;

  constructor(private builder: FormBuilder,private contact: ContactService) { }

  ngOnInit(): void {

    this.FormData = this.builder.group({
      Fullname : new FormControl('', [Validators.required]),
      Email : new FormControl('',[Validators.compose([Validators.required,Validators.email])]),
      Comment : new FormControl('', [Validators.required])
    })
  }

  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
    .subscribe(response => {
    window.open('https://mailthis.to/confirm')
    console.log(response)
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
  }
}
