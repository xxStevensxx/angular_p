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


@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    ProjetListComponent,
    HeaderComponent,
    AProposComponent,
    LandingPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
