import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import { AjoutCategorieComponent } from './gestion-categorie/ajout-categorie/ajout-categorie.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { AjoutProduitComponent } from './gestion-produit/ajout-produit/ajout-produit.component';
import { CommandeComponent } from './commande/commande.component';
import { MesCommandeComponent } from './commande/mes-commande/mes-commande.component';
import { AjoutRdvComponent } from './gestion-rdv/ajout-rdv/ajout-rdv.component';
import { GestionRdvComponent } from './gestion-rdv/gestion-rdv.component';
import { ChoisirDateComponent } from './gestion-rdv/choisir-date/choisir-date.component';

const routes: Routes = [
  {path:'',component:AcceuilComponent},

{path:'acceuil',component:AcceuilComponent},
{path:'login',component:LoginComponent},
{path:'produit',component:ProduitComponent},
{path:'gestion-produit',component:GestionProduitComponent},
{path:'ajouter-produit',component:AjoutProduitComponent},

{path:'contact',component:ContactComponent},
{path:'user',component:UserComponent},
{path:'categorie',component:GestionCategorieComponent},
{path:'ajout-categorie',component:AjoutCategorieComponent},
{path:'commande',component:CommandeComponent},
{path:'mes-commandes',component:MesCommandeComponent},
{path:'ajout-rdv',component:AjoutRdvComponent},
{path:'gestion-rdv',component:GestionRdvComponent},
{path:'choisir-date',component:ChoisirDateComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
