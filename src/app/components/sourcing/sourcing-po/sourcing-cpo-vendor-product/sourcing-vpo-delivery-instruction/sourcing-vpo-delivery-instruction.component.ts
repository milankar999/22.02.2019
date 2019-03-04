import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';


import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';

@Component({
  selector: 'app-sourcing-vpo-delivery-instruction',
  templateUrl: './sourcing-vpo-delivery-instruction.component.html',
  styleUrls: ['./sourcing-vpo-delivery-instruction.component.css']
})
export class SourcingVpoDeliveryInstructionComponent implements OnInit {
  model:any={}
  sourcing_delivery_info:object[]=[];
  di_1="";
  di_2="";
  di_3="";
  di_4="";
  di_5="";
  di_6="";
  di_7="";
  di_8="";
  di_9="";
  di_10="";
  vpo_id="";
  cpo_id="";

  constructor(private formBuilder: FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute) {} 
  
  ngOnInit() {
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');  
    this.cpo_id = cpo_id; 
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');  
    this.vpo_id = vpo_id; 
  this.SourcingVpoDeliveryInfo(cpo_id,vpo_id)
    
  }
  SourcingVpoDeliveryInfo(cpo_id,vpo_id){
    this.PoVendorService.getSourcingVpoDeliveryInfo(cpo_id,vpo_id).subscribe((data)=>{  // get method
      this.di_1=data['di1'];
      this.di_2=data['di2'];
      this.di_3=data['di3'];
      this.di_4=data['di4'];
      this.di_5=data['di5'];
      this.di_6=data['di6'];
      this.di_7=data['di7'];
      this.di_8=data['di8'];
      this.di_9=data['di9'];
      this.di_10=data['di10'];
      this.sourcing_delivery_info=data;
      console.log(data);
  });
  }
  submit_delivery_info(event){
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');  
    this.cpo_id = cpo_id; 
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');  
    this.vpo_id = vpo_id;
    this.PoVendorService.PutSourcingVpoDeliveryInfo(this.model.di1,
      this.model.di2,
      this.model.di3,
      this.model.di4,
      this.model.di5,
      this.model.di6,
      this.model.di7,
      this.model.di8,
      this.model.di9,
      this.model.di10,
      cpo_id,vpo_id).subscribe((data)=>{ 
        this.sourcing_delivery_info=data;
        console.log(data);
        this.router.navigate(['sourcing/sourcing-po/'+cpo_id+'/souring-cpo-vendor-product']); 
  })
}
  }
