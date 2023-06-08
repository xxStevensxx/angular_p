import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AProposListComponent } from './a-propos-list/a-propos-list.component';

const routes: Routes = [
    {path: "home", component: LandingPageComponent},
    {path: "projets", component: ProjetListComponent},
    {path: "aPropos", component: AProposListComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[ 
        RouterModule
    ]
})

export class AppRoutingModule{

}