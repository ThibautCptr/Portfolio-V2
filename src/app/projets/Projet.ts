import {Tag} from "../projets/Tag"

export class Projet {
  id : number;
  Title: string;
  url_img : string;
  description : string;
  git_link : string;
  status : string;
  Tag : Tag[]
}
