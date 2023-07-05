import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(public aut:AuthService) {

    aut.isAuthenticated$.subscribe(au => {
      console.log(au);
      
    })
    // console.log(aut);
    // console.log(aut.isAuthenticated$)
    // console.log(aut.isLoading$);
    // console.log(aut.handleRedirectCallback);
    
    
   
    
    
  }

}
