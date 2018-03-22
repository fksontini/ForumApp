import { Component, OnInit, Input } from '@angular/core';
import { sujet } from '../models/sujet';
import { Message} from '../models/message';
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent {

  
  @Input()
  sujet:sujet;
  PartageMethode= ["facebook","twitter"];
  etat=false;
  form=new FormGroup(
    { user:new FormControl('',[Validators.required,Validators.minLength(3)])
      ,
    message: new FormControl()
  });
  get user(){
    return this.form.get("user");
  }
  get message(){
    return this.form.get("message");
  }
  log(a)
  {
    console.log(a);
  }
  envoyer(user,message)
  {
    let resp=new Message(user,message);
    this.sujet.messages.push( resp);

  }
  SupprimerMessage(m)
  {
 let index=  this.sujet.messages.indexOf(m);
this.sujet.messages.splice(index,1)
}
}
