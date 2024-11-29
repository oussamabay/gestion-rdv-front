import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "src/environement/environement";

@Injectable({
    providedIn:"root",
})
export class ProduitService{

constructor(private http : HttpClient){}
 allproduitnonarchiver(){
 
    return this.http.get(CONFIG.URL+"produit/affichagenonarchiver");
 }



}