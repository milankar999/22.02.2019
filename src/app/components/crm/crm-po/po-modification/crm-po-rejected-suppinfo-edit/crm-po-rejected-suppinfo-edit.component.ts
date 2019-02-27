import { Component, OnInit } from '@angular/core';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crm-po-rejected-suppinfo-edit',
  templateUrl: './crm-po-rejected-suppinfo-edit.component.html',
  styleUrls: ['./crm-po-rejected-suppinfo-edit.component.css']
})
export class CrmPoRejectedSuppinfoEditComponent implements OnInit {
  porejectedsuppinfo:object[]=[];
  model:any={};
  customer_pono:"";
  customer_podate:"";
  deliverydate:"";
  billingaddress:"";
  shippingaddress:"";
  incoterms:"";
  paymentterms:0;
  cpo_reject_id="";

  constructor(private PoEntryServicesService:PoEntryServicesService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.PoRejectedSuppoInfoList()
  }
  PoRejectedSuppoInfoList(){
    let reject_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_reject_id=reject_id;
    this.PoEntryServicesService.getPoRejectedSuppoInfoList(reject_id).subscribe(data=>{
      this.customer_pono=data['customer_po_no'];
      this.customer_podate=data['customer_po_date'];
      this.deliverydate=data['delivery_date'];
      this.billingaddress=data['billing_address'];
      this.shippingaddress=data['shipping_address'];
      this.incoterms=data['inco_terms'];
      this. paymentterms=data['payment_terms'];
      this.porejectedsuppinfo=data;
      console.log(data);
    })
  }
  submitrejectedsuppinfolist(event){
    let reject_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_reject_id=reject_id;
    
    this.PoEntryServicesService.PostPoRejectSuppInfo(this.model.customer_po_no,
      this.model.customer_po_date,
      this.model.delivery_date,
      this.model.billing_address,
      this.model.shipping_address,
      this.model.inco_terms,
      this.model. payment_terms,
      reject_id).subscribe(data=>{
      this.porejectedsuppinfo=data;
      console.log(data);
      this.router.navigate(['crm/crm-po/po-mdification/'+reject_id+'/crm-po-rejected-details']);
    })

  }
  }


