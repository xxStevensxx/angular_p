import { Component } from '@angular/core';
import { LoadfileserviceComponent } from '../loadfileservice/loadfileservice.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent{
constructor(private loadfile: LoadfileserviceComponent){};

  ngOnInit(){

    this.loadfile.loadScript("assets/js/rainstars.js", "text/javascript")

  }  
}
