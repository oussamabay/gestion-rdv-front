import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { CONFIG } from "src/environement/environement";
import { login } from "./login";

@Injectable({
    providedIn:"root",
})
export class LogintService{

private curreentUserSubject !: BehaviorSubject<login>
public currentuser!:Observable<login>


constructor(private http : HttpClient){

}



login(connexion:any){
    return this.http.post<any>(CONFIG.URL+"auth/login",connexion).pipe(
        map((userconnexion)=>{
            if(userconnexion && userconnexion.token){
                localStorage.setItem("User",JSON.stringify(userconnexion))
                localStorage.setItem("Role",userconnexion.profil)
                localStorage.setItem("Email",userconnexion.email)
                localStorage.setItem("Token",userconnexion.token)
                this.curreentUserSubject.next(userconnexion);
                return userconnexion
            }
        }
    ));
}




}