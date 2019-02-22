import { Component, OnInit } from '@angular/core';
import { PoApprovalService } from 'src/app/services/sales/po/po-approval.service';

import{ Router, ActivatedRoute } from '@angular/router'; 
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-sales-po-approval-list',
  templateUrl: './sales-po-approval-list.component.html',
  styleUrls: ['./sales-po-approval-list.component.css']
})
export class SalesPoApprovalListComponent implements OnInit {
  query:string='';
  salesapprovallist:object[]=[];
  
  constructor(private PoApprovalService:PoApprovalService) { }

  ngOnInit() {
    this.SalesApprovalList()
  }
  SalesApprovalList(){
    this. PoApprovalService.getSalesApprovalList().subscribe((data)=>{  
      this.salesapprovallist=data;
      console.log( this.salesapprovallist);
      
  })
}
  }
