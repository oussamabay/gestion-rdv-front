import { Component } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.css']
})
export class AjoutCategorieComponent {
  categorie!:FormGroup ;
constructor(private service : CategorieService){}
ngOnInit(){
  this.categorie= new FormGroup({
    nom: new FormControl("",[Validators.required]),
    description: new FormControl("",[Validators.required])
  })
}



ajouter() {
  this.service.ajoutcategorie(this.categorie.value).subscribe((res)=>{
    window.alert("Categorie Ajouter avec succées")
  })}           
}
