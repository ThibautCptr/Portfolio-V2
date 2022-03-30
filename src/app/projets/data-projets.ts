import { Projet } from "./Projet";

export const Projets : Projet[] = [
  {
    id : 0,
    title : "PROJET REFONTE SITE IUT LENS",
    date : new Date(2019,11,1),
    url_img : "../../assets/images/refonte_site_iut_projet/refonte_site_iut_lens.png",
    description : "Projet sur deux mois où nous devions recrée cette page ainsi que plusieurs autres en respectant des consignes et la chartes graphiques du site",
    git_link : "",
    dl_link : "",
    status : "Terminé",
    tag : [
      {
        value : 'HTML',
        icon : 'fab fa-html5',
        severity : 'info',
        color : 'orange',
        degree : 50

      },
      {
        value : 'CSS',
        icon : 'fab fa-css3',
        severity : 'success',
        color : 'blue',
        degree : 50

      },
      {
        value : 'Travaille de groupe',
        icon : 'pi pi-users',
        severity : 'info',
        color : 'black',
        degree : 100

      }
    ],
    screen : [
      {
        url : "../../assets/images/refonte_site_iut_lens.png",
        title : "Page d'acceuil",
        id_projet : 0
      },
      {
        url : "../../assets/images/image_base.jpeg",
        title : "Test",
        id_projet : 0

      }
    ]
  },
  {
    id : 1,
    title : "PROJET Portal",
    date : new Date(2020,5,1),
    url_img : "../../assets/images/Portal_projet/Portal_2_Official_Logo.png",
    description : "Projet de groupes de 3 personnes où nous devions recrée un jeu en s'inspirant des méchaniques du jeu Portal \n Nous devions apprendre à utiliser le logiciel Unity et le language C# sur une durée de deux mois",
    git_link : "https://github.com/ThibautCptr/Gateway",
    dl_link : "https://github.com/ThibautCptr/Gateway/archive/refs/heads/main.zip",
    status : "Terminé",
    tag : [
      {
        value : 'C#',
        icon : '',
        severity : 'info',
        color : 'black',
        degree : 80

      },
      {
        value : 'Unity',
        icon : 'fab fa-unity',
        severity : 'info',
        color : 'black',
        degree : 80

      },
      {
        value : 'Travaille de groupe',
        icon : 'pi pi-users',
        severity : 'info',
        color : 'black',
        degree : 100

      }
    ],
    screen : []

  },
  {
    id: 2,
    title : "Projet Marathon",
    date : new Date(2020,11,1),
    url_img : "../../assets/images/marathon_projet/image_marathon.jpg",
    description : "Projet marathon sur 3 jours en groupes de 6 élèves. \n Nous devions utiliser du language PHP/HTML/CSS et du SQL pour répondre a un énoncé dans le but de crée une ludothque de jeux de société",
    git_link : "https://github.com/ThibautCptr/Ludotheque",
    dl_link : "https://github.com/ThibautCptr/Ludotheque/archive/refs/heads/main.zip",
    status : "Terminé",
    tag : [
      {
        value : 'HTML',
        icon : 'fab fa-html5',
        severity : 'info',
        color : 'orange',
        degree : 25

      },
      {
        value : 'CSS',
        icon : 'fab fa-css3',
        severity : 'info',
        color : 'blue',
        degree : 15

      },
      {
        value : 'PHP',
        icon : 'fab fa-php',
        severity : 'info',
        color : 'blue',
        degree : 75

      },
      {
        value : 'SQL',
        icon : 'fas fa-database',
        severity : 'info',
        color : 'black',
        degree : 20

      },
      {
        value : 'Travaille de groupe',
        icon : 'pi pi-users',
        severity : 'info',
        color : 'black',
        degree : 100

      }
    ],
    screen : []

  },
  {
    id : 3,
    title : "Portfolio V1",
    date : new Date(2021,0,1),
    url_img : "../../assets/images/portfolio_v1_projet/portfolio_v1.jpg",
    description : "Crée un portfolio afin de me présenter plus en profondeur, de présenter mes projets et montrer mes compétences. \n Utilisation pour la premiére fois du javascript.",
    git_link : "https://github.com/ThibautCptr/Portfolio",
    dl_link : "https://github.com/ThibautCptr/Portfolio/archive/refs/heads/main.zip",
    status : "Terminé",
    tag : [
      {
        value : 'HTML',
        icon : 'fab fa-html5',
        severity : 'info',
        color : 'orange',
        degree : 50

      },
      {
        value : 'CSS',
        icon : 'fab fa-css3',
        severity : 'info',
        color : 'blue',
        degree : 50

      },
      {
        value : 'Javascript',
        icon : 'fab fa-js',
        severity : 'info',
        color : 'rgb(226, 226, 21)',
        degree : 15

      }
    ],
    screen : []

  },
  {
    id : 4,
    title : "Projet AGIL'IT",
    date : new Date(2021,2,1),
    url_img : "../../assets/images/agil'IT_projet/agil'IT_projet_image.png",
    description : "Pendant une durée de 48 heures, il a fallu réaliser une ludothèque à l’aide du Framework Angular, des langages HTML, CSS et TypeScript, d’un serveur API (avec Laravel) et l’outil collaboratif gitlab. Le principe de ce projet était de travailler sous les restrictions de travail d'une entreprise, en applicant la méthode agile.",
    git_link : "",
    dl_link : "",
    status : "Terminé",
    tag : [
      {
        value : 'HTML',
        icon : 'fab fa-html5',
        severity : 'info',
        color : 'orange',
        degree : 25
      },
      {
        value : 'CSS',
        icon : 'fab fa-css3',
        severity : 'info',
        color : 'blue',
        degree : 10

      },
      {
        value : 'Javascript',
        icon : 'fab fa-js',
        severity : 'info',
        color : 'yellow',
        degree : 70

      },
      {
        value : 'Angular',
        icon : 'fab fa-angular',
        severity : 'info',
        color : 'red',
        degree : 70

      }
    ],
    screen : []

  },
  {
    id : 5,
    title : "Portfolio V2",
    date : new Date(2021,3,1),
    url_img : "http://image.noelshack.com/fichiers/2021/23/5/1623429979-image-2021-06-11-184617.png",
    description : "Refonte du portfolio en utilisant AngularJS. Utilisation appliqué d'Angular",
    git_link : "https://github.com/ThibautCptr/Portfolio-V2",
    dl_link : "https://github.com/ThibautCptr/Portfolio-V2/archive/refs/heads/master.zip",
    status : "En cours",
    tag : [
      {
        value : 'HTML',
        icon : 'fab fa-html5',
        severity : 'info',
        color : 'orange',
        degree : 50

      },
      {
        value : 'CSS',
        icon : 'fab fa-css3',
        severity : 'info',
        color : 'blue',
        degree : 50

      },
      {
        value : 'Javascript',
        icon : 'fab fa-js',
        severity : 'info',
        color : 'rgb(226, 226, 21)',
        degree : 30

      },
      {
        value : 'Angular',
        icon : 'fab fa-angular',
        severity : 'info',
        color : 'red',
        degree : 30

      }
    ],
    screen : []

  }
]
