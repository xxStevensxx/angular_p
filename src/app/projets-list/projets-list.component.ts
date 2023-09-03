import { Component } from '@angular/core';
import { Projet } from '../models/Projet.model';
import { LoadfileserviceComponent } from '../loadfileservice/loadfileservice.component';

@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.css']
})
export class ProjetsListComponent {
  constructor(private loadservice: LoadfileserviceComponent){}
  projets!:Projet[];

  ngOnInit(){

      this.loadservice.loadScript("assets/libs/flickity.pkgd.min.js", "text/javascript");

    this.projets = [
      {
        imageUrl:'assets/images/test.avif',
        title:'PayMyBudy',
        description:'Une application web de paiement entre particuliers en Java',
        like:0
      },

      {
        imageUrl:'assets/images/test.avif',
        title:'Veville',
        description:'Site web de location de vehicule en PHP',
        like:0
      },

      {
        imageUrl:'assets/images/test.avif',
        title:'Locabike',
        description:'un site de résa de vélo utilisant l"API de Lyon en JS',
        like:0
      },
      {
        imageUrl:'assets/images/test.avif',
        title:'Locabike',
        description:'un site de résa de vélo utilisant l"API de Lyon en JS',
        like:0
      },
      {
        imageUrl:'assets/images/test.avif',
        title:'Locabike',
        description:'un site de résa de vélo utilisant l"API de Lyon en JS',
        like:0
      },
      {
        imageUrl:'assets/images/test.avif',
        title:'Locabike',
        description:'un site de résa de vélo utilisant l"API de Lyon en JS',
        like:0
      }
    ]
  }

}
