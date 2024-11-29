import { Component } from '@angular/core';
import { LogintService } from './login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login!:FormGroup;
constructor(private service : LogintService){}
ngOnInit(){
  this.login= new FormGroup({
    email: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required])
  })
}
connexion(){
  this.service.login(this.login.value).subscribe((res)=>{
    window.alert("connexion avec succées")
    window.location.href='';
  })

}

}
