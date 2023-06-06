import { Component, Input, OnInit } from '@angular/core';
import { Apropos } from '../models/Apropos.model';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent implements OnInit  {
 @Input() apropos!: Apropos;

  ngOnInit(){
    this.apropos={  
        introduction: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        aPropos: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facilis, ea repellat suscipit excepturi rem eveniet facere commodi magni nihil in veritatis. Laudantium, quo vitae."
    }
  }
}
