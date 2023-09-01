import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-loadfileservice',
  templateUrl: './loadfileservice.component.html',
  styleUrls: ['./loadfileservice.component.css']
})

@Injectable()
export class LoadfileserviceComponent {

  constructor(){};

   loadScript(scriptSource: string, type: string){

    let jscript = document.createElement("script");
    jscript.type = type;
    jscript.async = true;
    jscript.src = scriptSource;

    document.body.appendChild(jscript);

  }

}
