import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';


import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';


@Component({
  selector: 'app-sourcing-cpo-vendor-product-proceed',
  templateUrl: './sourcing-cpo-vendor-product-proceed.component.html',
  styleUrls: ['./sourcing-cpo-vendor-product-proceed.component.css']
})
export class SourcingCpoVendorProductProceedComponent implements OnInit {
  display='none';
  sourcing_cpo_market_po:object[]=[];
  cpo_id = "";
  vpo_id = "";
  request_display='none';
  
  constructor(private formBuilder: FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute) {} 

  ngOnInit() {
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_id=cpo_id;
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    this.vpo_id=vpo_id;
  
  }
  market_ready_po(event){
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_id=cpo_id;
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    this.vpo_id=vpo_id;
     
    this.PoVendorService.PostSourcing_Cpo_Market_ReadyPO(cpo_id,vpo_id).subscribe((data)=>{ 
     
      console.log(data);
      this.router.navigate(['sourcing/sourcing-po/'+cpo_id+'/souring-cpo-vendor-product']);
     
    });

  }
  request_buying_purchase(event){
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_id=cpo_id;
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    this.vpo_id=vpo_id;
    this.PoVendorService.PostSourcing_Cpo_buying_PurchasePO(cpo_id,vpo_id).subscribe((data)=>{ 
      console.log(data);
      this.router.navigate(['sourcing/sourcing-po/'+cpo_id+'/souring-cpo-vendor-product']);
    });
  }
  openModalDialog()
  {
    this.display='block';
  }
  closeModalDialog()
  {
    this.display='none';
    }
    openRequestModalDialog()
    {
      this.request_display='block';
    }
    closeRequestModalDialog()
    {
      this.request_display='none';
    }

}
