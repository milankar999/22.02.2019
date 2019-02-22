import { Component, OnInit } from '@angular/core';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crm-po-rejected-list',
  templateUrl: './crm-po-rejected-list.component.html',
  styleUrls: ['./crm-po-rejected-list.component.css']
})
export class CrmPoRejectedListComponent implements OnInit {
porejectedlist:object[]=[];
  constructor(private PoEntryServicesService:PoEntryServicesService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.PoRejectedList()
  }
  PoRejectedList(){
    this.PoEntryServicesService.getCrmPoRejectList().subscribe(data=>{
      this.porejectedlist=data;
      console.log(data);
    })
  }

}
