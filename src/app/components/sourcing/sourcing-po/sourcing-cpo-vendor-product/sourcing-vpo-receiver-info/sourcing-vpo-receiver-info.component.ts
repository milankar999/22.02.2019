import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';


import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';

@Component({
  selector: 'app-sourcing-vpo-receiver-info',
  templateUrl: './sourcing-vpo-receiver-info.component.html',
  styleUrls: ['./sourcing-vpo-receiver-info.component.css']
})
export class SourcingVpoReceiverInfoComponent implements OnInit {
  model:any={}
  sourcing_reciver_info:object[]=[];
  cpo_id="";
  vpo_id="";
  receivername ="";
  receiverphone1= "";
  receiverphone2= "";
  receiverdept= "";

  constructor(private formBuilder: FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute) {} 

  ngOnInit() {
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_id=cpo_id;
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    this.vpo_id=vpo_id;
    this.SourcingVpoReciverInfo(cpo_id,vpo_id)
  }
  SourcingVpoReciverInfo(cpo_id,vpo_id){
    this.PoVendorService.getSourcingVpoReciverInfo(cpo_id,vpo_id).subscribe((data)=>{
      this.receivername=data['receiver_name'];
       this.receiverphone1=data['receiver_phone1'];
       this.receiverphone2=data['receiver_phone2'];
       this.receiverdept=data['receiver_dept'];
      console.log(data);
  });
}
submit_reciver_info(event){
  let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
  this.cpo_id=cpo_id;
  let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
  this.vpo_id=vpo_id;
  this.PoVendorService.Putsubmit_reciver_info(this.model.receiver_name,
    this.model.receiver_phone1,
    this.model.receiver_phone2,
    this.model.receiver_dept,
     cpo_id,vpo_id).subscribe((data)=>{
       console.log(data);
       this.router.navigate(['sourcing/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/terms_conditions']); 
});
}
  }


