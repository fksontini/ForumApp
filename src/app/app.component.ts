import { Component } from '@angular/core';
import { sujet } from './models/sujet';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  sujets=[
    new sujet("Forum Angular",
            [
              new Message("Jamel","Message de test 1"),
              new Message("Firas KSONTINI","Message de test 1"),
              new Message("Jamoula !","Message de test 3")
            ]),
            new sujet("Forum Angular",
            [
              new Message("Jamel","Message de test 1"),
              new Message("Firas KSONTINI","Message de test 1"),
              new Message("Jamoula !","Message de test 3")
            ]
            )];
}
