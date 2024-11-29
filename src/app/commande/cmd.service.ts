import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "src/environement/environement";

@Injectable({
    providedIn:"root",
})
export class CmdService{

constructor(private http : HttpClient){}
 Commander(idprod:any,qte:any){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const options = { headers: headers, responseType: 'text' as const };

    return this.http.post(CONFIG.URL+"commande/Ajout?idprod="+idprod+
        "&email="+localStorage.getItem("Email")+"&qte="+qte,null,options);
 }


 affichernonarchiverbyemail(){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
  //  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
   // const options = { headers: headers, responseType: 'text' as const };

    return this.http.get(CONFIG.URL + "commande/affichernonarchiverbyemail?email=" + localStorage.getItem("Email"), {headers:headers});
 }
}