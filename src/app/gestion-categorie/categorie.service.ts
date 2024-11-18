import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "src/environement/environement";

@Injectable({
    providedIn:"root",
})
export class CategorieService{

constructor(private http : HttpClient){}
 allcatnonarchiver(){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
    return this.http.get(CONFIG.URL+"cat/affihcernonarchiver",{headers:headers});
 }


 ajoutcategorie(cat:any){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
    return this.http.post(CONFIG.URL+"cat/ajout",cat,{headers:headers});
 }


 archiver(id:any){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
    return this.http.put(CONFIG.URL+"cat/archiver?id="+id,{headers:headers});
 }
 
 desarchiver(id:any){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
    return this.http.put(CONFIG.URL+"cat/desarchiver?id="+id,{headers:headers});
 }
 
 affihcerarchiver(){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
    return this.http.get(CONFIG.URL+"cat/affihcerarchiver",{headers:headers});
 }

 



}