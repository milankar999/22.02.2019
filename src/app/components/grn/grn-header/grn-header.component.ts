import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-grn-header',
  templateUrl: './grn-header.component.html',
  styleUrls: ['./grn-header.component.css']
})
export class GrnHeaderComponent implements OnInit {
  display='none';
  constructor(private router:Router, private cookie:CookieService) { }

  ngOnInit() {
  }
  logoutUser(event){
   
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    this.cookie.deleteAll();
    this.cookie.delete('sessionid');
    //this.cookie.delete('csrftoken');
    }
    openModalDialog()
    {
      this.display='block';
    }
    closeModalDialog()
    {
      this.display='none';
    }
}
