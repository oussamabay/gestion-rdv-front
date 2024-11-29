import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LogintService } from 'src/app/login/login.service';
import { RDVService } from '../rdv.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-choisir-date',
  templateUrl: './choisir-date.component.html',
  styleUrls: ['./choisir-date.component.css']
})
export class ChoisirDateComponent {
  choisirform!:FormGroup;
  id:any  ;
  date:any ;
  constructor(private activatedroute:ActivatedRoute,private service : RDVService,private datepipe:DatePipe){}
  ngOnInit(){
    this.id = this.activatedroute.snapshot.paramMap.get('id')
  this.choisirform= new FormGroup({
    date: new FormControl("",[Validators.required]),
  })
}
save(){
  this.date= this.datepipe.transform(this.choisirform.value.date,'yyyy/MM/dd')
this.service.changedate(this.id,this.date).subscribe((res)=>{
  window.alert("Félicitaion votre date a été changé")
  window.location.reload()
})
}
}
