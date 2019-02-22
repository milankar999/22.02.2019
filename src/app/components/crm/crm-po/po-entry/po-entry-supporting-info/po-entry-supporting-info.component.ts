import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router, ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-po-entry-supporting-info',
  templateUrl: './po-entry-supporting-info.component.html',
  styleUrls: ['./po-entry-supporting-info.component.css']
})
export class PoEntrySupportingInfoComponent implements OnInit {
  query:string='';
  public requestorId;
  supportinfolist:Object[]=[];
  display='none';
  poForm :FormGroup;
  model:any={}; //model for validation
  
  customer_id="";
  requester_id=""; 
  receiver_id="";

  address = "";
  shipping_address = "";
  billing_address = "";
  inco_terms = "";
  payment_term = 0;

  CPOResponse:Object[]=[];

  constructor(private  poEntryServicesService:PoEntryServicesService,
    private router:Router, private route:ActivatedRoute, private builder:FormBuilder) { }

  ngOnInit() { 
  this.buildForm();
  let cust_id=this.route.snapshot.paramMap.get('customer');
  let requ_id=this.route.snapshot.paramMap.get('requester');
  let rece_id=this.route.snapshot.paramMap.get('receiver');
  this.customer_id = cust_id;
  this.requester_id = requ_id;
  this.receiver_id=rece_id;
  this.PoEntrySupportingInfo(cust_id,requ_id,rece_id);

  }
  PoEntrySupportingInfo(cust_id,requ_id,rece_id){
    this.poEntryServicesService.getPoEntrySupportingInfo(cust_id,requ_id, rece_id).subscribe((data)=>{  
      this.address=data[0]['address'];
      this.shipping_address=data[0]['shipping_address'];
      this.billing_address=data[0]['billing_address'];
      this.inco_terms=data[0]['inco_term'];
      this.payment_term=data[0]['payment_term'];
      if(this.shipping_address=="Same")
        this.shipping_address=this.address;
      if(this.billing_address=="Same")
        this.billing_address=this.address;
      console.log(this.address);  
      if(this.model.billing_address==null)
      this.model.billing_address = this.billing_address;

    if(this.model.shipping_address==null)
      this.model.shipping_address = this.shipping_address;

    if(this.model.payment_term==null)
      this.model.payment_term = this.payment_term;    
  })
}

submitsupportinfolist(event)
{  
  let cust_id=this.route.snapshot.paramMap.get('customer');
  let requ_id=this.route.snapshot.paramMap.get('requester');
  let rece_id=this.route.snapshot.paramMap.get('receiver');
  this.customer_id = cust_id;
  this.requester_id = requ_id;
  this.receiver_id=rece_id;

    if(this.model.billing_address==null)
      this.model.billing_address = this.billing_address;

    if(this.model.shipping_address==null)
      this.model.shipping_address = this.shipping_address;

    if(this.model.payment_term==null)
      this.model.payment_term = this.payment_term;

      this.poEntryServicesService.PostSupportInfolist(
          this.model.shipping_address,
          this.model.billing_address,
          this.model.inco_terms,
          this.model.payment_term,
          this.model.delivery_date,
          this.model.customer_po_no,
          this.model.customer_po_date,
          cust_id,
          requ_id,
          rece_id).subscribe(data => {
              console.log(data);
              this.CPOResponse = data;
              console.log(this.CPOResponse['id'])
              this.router.navigate(['crm/po-entry/'+ this.CPOResponse['id'] +'/quotation-selection']);
          }
        )
}
 
buildForm(){
  this.poForm=this.builder.group({
    billing_address:[''],
    shipping_address:[''],
    delivery_date:['',Validators.required],
    customer_po_no:['',Validators.required],
    customer_po_date:['',Validators.required],
    inco_terms:['',Validators.required],
    payment_term:['']
  });
}
}

