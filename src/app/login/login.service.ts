import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { CONFIG } from "src/environement/environement";
import { login } from "./login";

@Injectable({
    providedIn:"root",
})
export class LogintService{

    private currentUserSubject: BehaviorSubject<login>;
    public currentUser: Observable<login>;

constructor(private http: HttpClient, private httpClient: HttpClient) {
  
    this.currentUserSubject = new BehaviorSubject<login>(
      JSON.parse(localStorage.getItem("currentUser")|| '{}')
    );

    this.currentUser = this.currentUserSubject.asObservable();
}
  public get currentUserValue(): login {
    return this.currentUserSubject.value;
  }



login(connexion:any){
    return this.http.post<any>(CONFIG.URL+"auth/login",connexion).pipe(
        map((userconnexion)=>{
            if(userconnexion && userconnexion.token){
                localStorage.setItem("User",JSON.stringify(userconnexion))
                localStorage.setItem("Role",userconnexion.profil)
                localStorage.setItem("Email",userconnexion.email)
                localStorage.setItem("Token",userconnexion.token)
                this.currentUserSubject.next(userconnexion);
                return userconnexion
            }
        }
    ));
}




}