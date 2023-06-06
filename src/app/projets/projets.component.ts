import { Component, Input } from '@angular/core';
import { Projet } from '../models/Projet.model';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})

export class ProjetsComponent{
  @Input() projet!: Projet;

  onAddLike(){
    this.projet.like ++;
  }
}
