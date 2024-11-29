import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
profil:any ;
token:any;

ngOnInit(){
  this.token= localStorage.getItem("Token")
  this.profil=localStorage.getItem("Role")
}


  deconnexion(){
    localStorage.removeItem("User")
    localStorage.removeItem("Token")
    localStorage.removeItem("Email")
    localStorage.removeItem("Role")
    window.location.href='';
  }
}
