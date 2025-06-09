import { Component } from '@angular/core';
import { rainstars } from 'src/assets/js/rainstars';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent{

  ngOnInit(){
    rainstars();
  }  
}
