import {Tag} from "../projets/Tag"
import { Screen } from "./Screen";
export class Projet {
  id : number;
  title: string;
  date: Date;
  url_img : string;
  description : string;
  git_link : string;
  dl_link : string;
  status : string;
  tag : Tag[];
  screen : Screen[];

  static cpt : number = 0;

  constructor(title : string, url_img : string, description : string, git_link : string , status : string , tag : Tag[], screen : Screen[]) {
    this.id = Projet.cpt++;
    this.title = title;
    this.url_img = url_img;
    this.description = description;
    this.git_link = git_link;
    this.status = status;
    this.tag = tag;
    this.screen = screen;
  }
}


