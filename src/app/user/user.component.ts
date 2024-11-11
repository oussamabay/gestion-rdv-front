import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
alluser:any ;
  constructor(private service : UserService){}

ngOnInit(){
  this.service.allusernonarchiver().subscribe((res)=>{
this.alluser=res ; 
console.log(this.alluser)
  })
}
}
