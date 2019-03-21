import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router, ActivatedRoute } from '@angular/router';


import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';

@Component({
  selector: 'app-sourcing-vpo-add-basic-info',
  templateUrl: './sourcing-vpo-add-basic-info.component.html',
  styleUrls: ['./sourcing-vpo-add-basic-info.component.css']
})
export class SourcingVpoAddBasicInfoComponent implements OnInit {
  model:any={}
  poForm :FormGroup;
  sourcingvpobasicinfo:object[]=[];
  billingaddress="";
  shippingaddress="";
  deliverydate="";
  offerreference="";
  offerdate="";
  paymentterm="";
  advancepercentage="";
  freightcharges="";
  customduties="";
  p_f="";
  insurances="";
  discounts=0;
  vpo_id="";
  cpo_id="";



  constructor(private formBuilder: FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute,private builder:FormBuilder) {} 
  

  ngOnInit() {
    this.buildForm();
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');  
    this.cpo_id = cpo_id; 
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');  
    this.vpo_id = vpo_id; 
  this.SourcingVpoBasicInfo(cpo_id,vpo_id)
    
  }
  SourcingVpoBasicInfo(cpo_id,vpo_id){
    this.PoVendorService.getSourcingVpoBasicInfo(cpo_id,vpo_id).subscribe((data)=>{  // get method
      this.billingaddress=data['billing_address'];
      this.shippingaddress=data['shipping_address'];
      this.deliverydate=data['delivery_date'];
      this.offerreference=data['offer_reference'];
      this.offerdate=data['offer_date'];
      this.paymentterm=data['payment_term'];
      this.advancepercentage=data['advance_percentage'];
      this.freightcharges=data['freight_charges'];
      this.customduties=data['custom_duties'];
      this.p_f=data['pf'];
      this.insurances=data['insurance'];
     
      this.sourcingvpobasicinfo=data;
      console.log(this.discounts)
      console.log(data);
  });
}
submitbasicinfo(event){
  let cpo_id=this.route.snapshot.paramMap.get('cpo_id');  
  this.cpo_id = cpo_id; 
  let vpo_id=this.route.snapshot.paramMap.get('vpo_id');  
  this.vpo_id = vpo_id; 

//validation alert message
          if(this.model.billing_address=="")
          {
            window.alert("Billing Address should not be empty");
            return;
          }
          if(this.model.shipping_address=="")
          {
            window.alert("Shipping Address should not be empty");
            return;
          }

          if(this.model.delivery_date=="")
          {
            window.alert("Delivery Date should not be empty");
            return;
          }
          if(this.model.offer_reference=="")
          {
            window.alert("Offer Reference should not be empty");
            return;
          }

          if(this.model.offer_date=="")
          {
            window.alert("Offer Date should not be empty");
            return;
          }
          if(this.model.payment_term=="")
          {
            window.alert("Payment Term should not be empty");
            return;
          }
          if(this.model.advance_percentage=="")
          {
            window.alert("Advance Percentage should not be empty");
            return;
          }
          if(this.model.freight_charges=="")
          {
            window.alert("Freight Charges should not be empty");
            return;
          }
          if(this.model.custom_duties=="")
          {
            window.alert("Custom Duties should not be empty");
            return;
          }

          if(this.model.pf=="")
          {
            window.alert("PF should not be empty");
            return;
          }

          if(this.model.insurance=="")
          {
            window.alert("Insurance should not be empty");
            return;
          }


  this.PoVendorService.PutSourcingVpoBasicInfo(
    this.model.billing_address,
    this.model.shipping_address,
    this.model.delivery_date,
    this.model.offer_reference,
    this.model.offer_date,
    this.model.payment_term,
    this.model.advance_percentage,
    this.model.freight_charges,
    this.model.custom_duties,
    this.model.pf,
    this.model.insurance,
    cpo_id,vpo_id).subscribe((data)=>{ 
      this.sourcingvpobasicinfo=data;
      console.log(data);
      this.router.navigate(['sourcing/sourcing-po/sourcing-cpo-vendor-product/'+ cpo_id +'/vpo/' + vpo_id + '/sourcing-vpo-add-contactperson-info']);
});
}
buildForm(){
  this.poForm=this.builder.group({
    billing_address:[''],
    shipping_address:[''],
    delivery_date:[''],
    offer_reference:[''],
    offer_date:[''],
    payment_term:[''],
    advance_percentage:[''],
    freight_charges:[''],
    custom_duties:[''],
    pf:[''],
    insurance:[''],
    

});
}
}
