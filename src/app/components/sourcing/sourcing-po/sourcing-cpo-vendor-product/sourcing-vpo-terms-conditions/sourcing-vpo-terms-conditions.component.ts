import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router, ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';

@Component({
  selector: 'app-sourcing-vpo-terms-conditions',
  templateUrl: './sourcing-vpo-terms-conditions.component.html',
  styleUrls: ['./sourcing-vpo-terms-conditions.component.css']
})
export class SourcingVpoTermsConditionsComponent implements OnInit {
  model:any={}
  sourcing_terms_condition:object[]=[];
  cpo_id="";
  poForm :FormGroup;
  vpo_id="";
  modeoftransport= "";
  incoterms="";
  installations = "";
  comment= "";
  terms_of_payments="";

  constructor(private formBuilder: FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute,private builder:FormBuilder) {} 

  ngOnInit() {
    this.buildForm();
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_id=cpo_id;
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    this.vpo_id=vpo_id;
    this.SourcingVpoTermsCondition(cpo_id,vpo_id)
  }
  SourcingVpoTermsCondition(cpo_id,vpo_id){
    this.PoVendorService.getSourcingVpoTermsCondition(cpo_id,vpo_id).subscribe((data)=>{
      this.modeoftransport=data['mode_of_transport'];
       this.incoterms=data['inco_terms'];
       this.installations=data['installation'];
       this.comment=data['comments'];
       this.terms_of_payments=data['terms_of_payment']
       this. sourcing_terms_condition=data;
      console.log(data);
  });
}
submit_terms_condition(event){
  let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
  this.cpo_id=cpo_id;
  let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
  this.vpo_id=vpo_id;
  this.PoVendorService.Putsubmit_terms_condition(this.model.mode_of_transport,
    this.model.inco_terms,
    this.model.installation,
    this.model.comments,
    this.model.terms_of_payment,
     cpo_id,vpo_id).subscribe((data)=>{
       console.log(data);
      this.router.navigate(['sourcing/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/delivery_instructions']); 
  
});
}
buildForm(){
  this.poForm=this.builder.group({
    mode_of_transport:['',Validators.required],
    inco_terms:['',Validators.required],
    installation:['',Validators.required],
    terms_of_payment:['',Validators.required],
    comments:['']

   
  })
}
}
