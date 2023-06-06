import { Component, Input } from '@angular/core';
import { Home } from '../models/Home.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent{
 @Input() home!: Home;

  ngOnInit(){
    this.home={
      imageUrl:'assets/images/landing.webp',
      description: 'Mon Parcours de Dev 😁😀'
    }
  }
  
}
