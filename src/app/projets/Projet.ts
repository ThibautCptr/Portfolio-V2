import {Tag} from "../projets/Tag"

export class Projet {
  id : number;
  title: string;
  url_img : string;
  description : string;
  git_link : string;
  status : string;
  tag : Tag[]

  static cpt : number = 0;

  constructor(title : string, url_img : string, description : string, git_link : string , status : string , tag : Tag[]) {
    this.id = Projet.cpt;
    this.title = title;
    this.url_img = url_img;
    this.description = description;
    this.git_link = git_link;
    this.status = status;
    this.tag = tag;
    Projet.cpt++;

  }
}


