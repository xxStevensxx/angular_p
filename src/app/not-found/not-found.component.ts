import { Component, Input } from '@angular/core';
import { Stars } from '../models/Stars.model';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  @Input() stars!: Stars[];

  ngOnInit(){

    this.stars = [
      {
        size: Math.random() * 5,
        delay: Math.random() * -20,
        duration: Math.random() *20,
        posX: Math.floor(Math.random() * window.innerWidth)
      }
    ]

    let space_home = document.getElementById("space_home");
    
    function rain(){
      let amount = 100;
      let i = 0;
  
          while(i < amount){

              let drop = document.createElement('i');
              drop.classList.add("stars");

              let size = Math.random() * 5;
              let posX = Math.floor(Math.random() * window.innerWidth);
              let delay = Math.random() * -20;
              let duration = Math.random() * 2;
  
              drop.style.width = size + 'px';
              drop.style.left = posX + 'px';
              drop.style.animationDelay = delay + 's';
              drop.style.animationDuration = 1 + duration + 's';

              space_home!.appendChild(drop);
              i++;
  
          }
          console.log(space_home);
    }
    rain();
  }

}
