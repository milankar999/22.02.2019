import { Component, OnInit } from '@angular/core';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crm-po-rejected-details',
  templateUrl: './crm-po-rejected-details.component.html',
  styleUrls: ['./crm-po-rejected-details.component.css']
})
export class CrmPoRejectedDetailsComponent implements OnInit {
  porejectlinedetailslist:object[]=[];
  cpo_reject_id="";
  accepted_display='none';
  rejected_display='none';
  
  constructor(private PoEntryServicesService:PoEntryServicesService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let reject_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_reject_id=reject_id;  //display singel api id --
    this.PoRejectDetailsList(reject_id)
  }
  PoRejectDetailsList(reject_id){
    this.PoEntryServicesService.getPoRejectLineDetailsList(reject_id).subscribe(data=>{
      this.porejectlinedetailslist=data;
      console.log(data);
    })
  }
  submitrejectedpolist(event){
    let reject_id=this.route.snapshot.paramMap.get('cpo_id');
    this.PoEntryServicesService.PostPoRejectPODetails(reject_id).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/crm/crm-po/po-modification/crm-po-rejected-list'])
     
    })
  }
  submitmarkresolvepolist(event){
    let reject_id=this.route.snapshot.paramMap.get('cpo_id');
    this.PoEntryServicesService.PostMarkResolvelist(reject_id).subscribe(data=>{
      console.log(data);
    })
  }
  openAcceptedModalDialog(){
    this.accepted_display='block';
  }
  closeAcceptedModalDialog(){
    this.accepted_display='none';
  }
  openRejectedModalDialog(){
    this.rejected_display='block';
  }
  closeRejectedModalDialog(){
    this.rejected_display='none';
  }
  }


