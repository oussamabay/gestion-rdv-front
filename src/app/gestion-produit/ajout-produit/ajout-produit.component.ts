import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from 'src/app/gestion-categorie/categorie.service';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent {
  prod!:FormGroup ;
  allcat :any ;
constructor(private catservice : CategorieService,private service : ProduitService){}
ngOnInit(){
  this.prod= new FormGroup({
    nom: new FormControl("",[Validators.required]),
    description: new FormControl("",[Validators.required]),
    date: new FormControl("",[Validators.required]),
    prix: new FormControl("",[Validators.required]),
    qte: new FormControl("",[Validators.required]),
    cat: new FormControl("",[Validators.required]),
 
 
 
  })
  this.catservice.allcatnonarchiver().subscribe((res)=>{
    this.allcat=res ; 
  })
}
ajouter(){
  let p = {
    nom : this.prod.value.nom,
    description:this.prod.value.description,
    date:this.prod.value.date,
    prix:this.prod.value.prix,
    qte:this.prod.value.qte
   }
   this.service.ajoutprod(p,this.prod.value.cat).subscribe((res)=>{
    window.alert("enregistrer avec succées")
   })
}


}
