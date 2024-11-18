import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProduitComponent } from './produit/produit.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { AjoutCategorieComponent } from './gestion-categorie/ajout-categorie/ajout-categorie.component';
import { AjoutProduitComponent } from './gestion-produit/ajout-produit/ajout-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilComponent,
    ProduitComponent,
    UserComponent,
    ContactComponent,
    LoginComponent,
    GestionCategorieComponent,
    GestionProduitComponent,
    AjoutCategorieComponent,
    AjoutProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
