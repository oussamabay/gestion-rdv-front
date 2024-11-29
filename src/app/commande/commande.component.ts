import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CmdService } from './cmd.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent {
  cmdfrom!:FormGroup;
  id:any ;
constructor(private activatedroute:ActivatedRoute,private service : CmdService){}
ngOnInit(){
  this.id = this.activatedroute.snapshot.paramMap.get('id')
  this.cmdfrom= new FormGroup({
    qte: new FormControl("",[Validators.required]),
  })
}
commander(){
this.service.Commander(this.id,this.cmdfrom.value.qte).subscribe((res)=>{
  if(res=="false"){
    window.alert("La quantité choisie n'est pas disponible ")

  }
  else {
    window.alert("Commande Créer avec succées")
    window.location.reload()

  }
})
}
}
