import { Component } from '@angular/core';
import { ProduitService } from './produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  allproduit :any ;
  token:any;
constructor(private service : ProduitService){}
ngOnInit(){
  this.token = localStorage.getItem("Token")
  console.log(this.token)
  this.service.allproduitnonarchiver().subscribe((res)=>{
    this.allproduit=res ; 
    console.log(this.allproduit)
  })
}
}
