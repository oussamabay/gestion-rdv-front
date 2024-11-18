import { Component } from '@angular/core';
import { ProduitService } from './produit.service';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent {
produitarchiver : any ;
produitnonarchiver:any ;
  constructor(private service : ProduitService){}
ngOnInit(){
  this.service.affihcerarchiver().subscribe((res)=>{
    this.produitarchiver=res ;
  })
  this.service.allproduitnonarchiver().subscribe((res)=>{
    this.produitnonarchiver=res ; 
  })
}
archiver(id:any){
  this.service.archiver(id).subscribe((res)=>{
    window.alert("archiver avec succées")
    window.location.reload();
  })
}
desarchiver(id:any){
  this.service.desarchiver(id).subscribe((res)=>{
    window.alert("desarchiver avec succées")
    window.location.reload();
  })
}
}
