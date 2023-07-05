import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html'
})
export class ProtegidaComponent {

  constructor(public aut:AuthService) {

    aut.user$.subscribe(perfil=>{
      console.log(perfil);
      
    })
   
    
    
  }
}
