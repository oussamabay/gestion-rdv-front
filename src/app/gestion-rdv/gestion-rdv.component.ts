import { Component } from '@angular/core';
import { RDVService } from './rdv.service';

@Component({
  selector: 'app-gestion-rdv',
  templateUrl: './gestion-rdv.component.html',
  styleUrls: ['./gestion-rdv.component.css']
})
export class GestionRdvComponent {
allrdv:any ;
  constructor(private service : RDVService){}

ngOnInit(){
  this.service.afficherrdv().subscribe((res)=>{
    this.allrdv=res ; 
    console.log(this.allrdv)
  })
}
accepter(id:any){
  this.service.accepter(id).subscribe((res)=>{
    window.alert("Rendez Vous Accepter")
    window.location.reload()
  })
}
}
