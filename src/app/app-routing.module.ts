import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ProjetsListComponent } from './projets-list/projets-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AProposListComponent } from './a-propos-list/a-propos-list.component';
import { CompetenceComponent } from './competence/competence.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
    {path: "home", component: LandingPageComponent},
    {path: "projets", component: ProjetsListComponent},
    {path: "aPropos", component: AProposListComponent },
    {path: "competences", component: CompetenceComponent},
    // {path: "**", component: NotFoundComponent}
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