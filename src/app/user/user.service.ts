import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "src/environement/environement";

@Injectable({
    providedIn:"root",
})
export class UserService{

constructor(private http : HttpClient){}
 allusernonarchiver(){
    const token = localStorage.getItem("Token");
    let headers = new HttpHeaders();
    headers= headers.set("Authorization",'Bearer '+token)
    return this.http.get(CONFIG.URL+"user/affichernonarchiver",{headers:headers});
 }



}