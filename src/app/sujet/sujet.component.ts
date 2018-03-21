import { Component, OnInit, Input } from '@angular/core';
import { sujet } from '../models/sujet';
import { Message} from '../models/message';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent {

  
  @Input()
  sujet:sujet;
  etat=false;
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
