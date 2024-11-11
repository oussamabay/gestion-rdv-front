import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{path:'acceuil',component:AcceuilComponent},
{path:'login',component:LoginComponent},
{path:'produit',component:ProduitComponent},
{path:'contact',component:ContactComponent},
{path:'user',component:UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
