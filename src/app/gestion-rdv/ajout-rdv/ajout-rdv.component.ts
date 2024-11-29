import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RDVService } from '../rdv.service';

@Component({
  selector: 'app-ajout-rdv',
  templateUrl: './ajout-rdv.component.html',
  styleUrls: ['./ajout-rdv.component.css']
})
export class AjoutRdvComponent {
  rdvform!:FormGroup;
  id:any ;
constructor(private activatedroute:ActivatedRoute,private service : RDVService){}
ngOnInit(){
  this.id = this.activatedroute.snapshot.paramMap.get('id')
  this.rdvform= new FormGroup({
    date: new FormControl("",[Validators.required]),
  })
}
Enregistrer(){
  this.service.ajoutrdv(this.rdvform.value,this.id).subscribe((res)=>{
    window.alert("Demande RDV Créer avedc Succées");
    window.location.reload()
  })
}
}
