import { Component, Input, OnInit } from '@angular/core';
import { Apropos } from '../models/Apropos.model';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent implements OnInit  {
 @Input() apropos!: Apropos;

  ngOnInit(){}
}
