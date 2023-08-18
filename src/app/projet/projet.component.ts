import { Component, Input } from '@angular/core';
import { Projet } from '../models/Projet.model';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})

export class ProjetComponent{
  @Input() projet!: Projet;

  onAddLike(){
    let nb = 100;
    this.projet.like++;
  }
}
