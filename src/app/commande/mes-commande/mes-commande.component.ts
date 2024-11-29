import { Component } from '@angular/core';
import { CmdService } from '../cmd.service';

@Component({
  selector: 'app-mes-commande',
  templateUrl: './mes-commande.component.html',
  styleUrls: ['./mes-commande.component.css']
})
export class MesCommandeComponent {
  mescmd:any ;
constructor(private service : CmdService){}
ngOnInit(){
  this.service.affichernonarchiverbyemail().subscribe((res)=>{
    this.mescmd=res ; 
    console.log(this.mescmd)
  })
  
}
}
