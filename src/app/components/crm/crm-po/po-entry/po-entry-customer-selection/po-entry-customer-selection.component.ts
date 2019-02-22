import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-po-entry-customer-selection',
  templateUrl: './po-entry-customer-selection.component.html',
  styleUrls: ['./po-entry-customer-selection.component.css']
})
export class PoEntryCustomerSelectionComponent implements OnInit {
  query:string='';
   customerselectionlist:Object[]=[];
    display='none';

      constructor(private poEntryServicesService:PoEntryServicesService,
       private router:Router) { }
  
  ngOnInit() {
    this.PoEntryCustomerSelection()
  }

  PoEntryCustomerSelection(){
    this.poEntryServicesService.getPoEntryCustomerSelection().subscribe((data)=>{  
      this.customerselectionlist=data;
      
  })
}
//model display
  openModalDialog(){
    this.display='block';
  }
  closeModalDialog(){
    this.display='none';

  }
 
}































































