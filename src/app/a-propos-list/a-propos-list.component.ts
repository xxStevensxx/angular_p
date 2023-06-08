import { Component } from '@angular/core';
import { Apropos } from '../models/Apropos.model';

@Component({
  selector: 'app-a-propos-list',
  templateUrl: './a-propos-list.component.html',
  styleUrls: ['./a-propos-list.component.css']
})
export class AProposListComponent {
  apropos!:Apropos[];

  ngOnInit() {

    this.apropos = [
      {
        titreFormation:'Ma formation',
        annee: Date.now(),
        description:'lorem*7',
        // imageUrl:"../assets/images/landing.webp"
      },
      {
        titreFormation:'Ma formation',
        annee: Date.now(),
        description:'lorem*7',
        imageUrl:''
      }
      ,
      {
        titreFormation:'Ma formation',
        annee: Date.now(),
        description:'lorem*7',
        imageUrl:''
      }
      ,
      {
        titreFormation:'Ma formation',
        annee: Date.now(),
        description:'lorem*7',
        imageUrl:''
      }
      ,
      {
        titreFormation:'Ma formation',
        annee: Date.now(),
        description:'lorem*7',
        imageUrl:''
      }
      ,
      {
        titreFormation:'Ma formation',
        annee: Date.now(),
        description:'lorem*7',
        imageUrl:''
      }
      ,
      {
        titreFormation:'Ma formation',
        annee: Date.now(),
        description:'lorem*7',
        imageUrl:''
      }
      ,
      {
        titreFormation:'Ma formation',
        annee: Date.now(),
        description:'lorem*7',
        imageUrl:''
      }
      ,
      {
        titreFormation:'Ma formation',
        annee: Date.now(),
        description:'lorem*7',
        imageUrl:''
      }
    ]
  } 
  

}
