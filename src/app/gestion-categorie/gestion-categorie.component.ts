import { Component } from '@angular/core';
import { CategorieService } from './categorie.service';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css']
})
export class GestionCategorieComponent {
  allcat:any ;
  allcatarchiver:any ;
constructor(private service : CategorieService){}
ngOnInit(){
  this.service.allcatnonarchiver().subscribe((res)=>{
    this.allcat=res ; 
  })
  this.service.affihcerarchiver().subscribe((res)=>{
  this.allcatarchiver=res ; 
  })
}
archiver(id:any){
this.service.archiver(id).subscribe((res)=>{
  window.alert("archiver avec succées")
  window.location.reload();
})}
desarchiver(id:any){
  this.service.desarchiver(id).subscribe((res)=>{
    window.alert("desarchiver avec succées")
    window.location.reload();
  })}
}
