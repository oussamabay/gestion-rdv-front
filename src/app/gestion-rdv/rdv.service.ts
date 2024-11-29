import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "src/environement/environement";

@Injectable({
    providedIn:"root",
})
export class RDVService{

constructor(private http : HttpClient){}
 ajoutrdv(rdv:any,idc:any){
    const token = localStorage.getItem("Token");
    console.log(token)
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
   // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const options = { headers: headers, responseType: 'text' as const };

    return this.http.post(CONFIG.URL+"rdv/ajout?idcommande="+idc,rdv,{headers:headers});
 }

 accepter(id:any){
    const token = localStorage.getItem("Token");
    console.log(token)
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
   // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const options = { headers: headers, responseType: 'text' as const };

    return this.http.post(CONFIG.URL+"rdv/accepter?id="+id,null,{headers:headers});
 }
 changedate(id:any,date:any){
    const token = localStorage.getItem("Token");
    console.log(token)
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
   // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const options = { headers: headers, responseType: 'text' as const };

    return this.http.post(CONFIG.URL+"rdv/changementdate?id="+id+"&date1="+date,null,{headers:headers});
 }


 affichernonarchiverbyemail(){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
  //  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
   // const options = { headers: headers, responseType: 'text' as const };

    return this.http.get(CONFIG.URL + "commande/affichernonarchiverbyemail?email=" + localStorage.getItem("Email"), {headers:headers});
 }

 
 afficherrdv(){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
  //  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
   // const options = { headers: headers, responseType: 'text' as const };

    return this.http.get(CONFIG.URL + "rdv/afficherrdv", {headers:headers});
 }
}