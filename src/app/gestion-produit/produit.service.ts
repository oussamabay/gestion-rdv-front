import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "src/environement/environement";

@Injectable({
    providedIn:"root",
})
export class ProduitService{

constructor(private http : HttpClient){}
 allproduitnonarchiver(){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
    return this.http.get(CONFIG.URL+"produit/affichagenonarchiver",{headers:headers});
 }


 ajoutprod(prod:any,nomcat:any){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
    return this.http.post(CONFIG.URL+"produit/ajout?email="+localStorage.getItem("Email")+"&nomcat="+nomcat,prod,{headers:headers});
 }

 archiver(id: any) {
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + token);

    // L'objet options doit contenir les headers
    const options = { headers: headers, responseType: 'text' as const };

    return this.http.put(CONFIG.URL + "produit/archiver?id=" + id, null, options);
}
 desarchiver(id:any){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const options = { headers: headers, responseType: 'text' as const };

    return this.http.put(CONFIG.URL + "produit/desarchiver?id=" + id, null, options);
 }
 
 affihcerarchiver(){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
    return this.http.get(CONFIG.URL+"produit/affichagearchiver",{headers:headers});
 }

 



}