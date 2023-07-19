import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjetsComponent } from './projets/projets.component';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { HeaderComponent } from './header/header.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { register } from 'swiper/element/bundle';
import { AProposListComponent } from './a-propos-list/a-propos-list.component';
import { CompetancesComponent } from './competances/competances.component';
import { CompetancesListComponent } from './competances-list/competances-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

register();


@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    ProjetListComponent,
    HeaderComponent,
    AProposComponent,
    LandingPageComponent,
    FooterComponent,
    AProposListComponent,
    CompetancesComponent,
    CompetancesListComponent,
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
