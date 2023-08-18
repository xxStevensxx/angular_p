import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjetComponent } from './projet/projet.component';
import { ProjetsListComponent } from './projets-list/projets-list.component';
import { HeaderComponent } from './header/header.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { register } from 'swiper/element/bundle';
import { AProposListComponent } from './a-propos-list/a-propos-list.component';
import { CompetenceComponent } from './competence/competence.component';
import { CompetencesListComponent } from './competences-list/competences-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

register();


@NgModule({
  declarations: [
    AppComponent,
    ProjetComponent,
    ProjetsListComponent,
    HeaderComponent,
    AProposComponent,
    LandingPageComponent,
    FooterComponent,
    AProposListComponent,
    CompetenceComponent,
    CompetencesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
