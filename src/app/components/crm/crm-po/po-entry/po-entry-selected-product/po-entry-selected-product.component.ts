import { Component, OnInit } from '@angular/core';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-po-entry-selected-product',
  templateUrl: './po-entry-selected-product.component.html',
  styleUrls: ['./po-entry-selected-product.component.css']
})
export class PoEntrySelectedProductComponent implements OnInit {
  poForm :FormGroup;
  launch_display='none';
  display='none';
  Model : any={};
  poentryeditselectproduct:object[]=[];
  product_title;
  description;
  model;
  brand;
  product_code;
  part_no;
  pack_size;
  hsn_code;
  gst;
  quantity;
  uom;
  unit_price;
  quotation_id="";
  modelselected:Object[]=[];
  query:string='';
  productdetailpagelist:Object[]=[];
  public requestorId ;
  launchselected:Object[]=[];

  constructor(private poEntryServicesService:PoEntryServicesService,
  private router:Router, private route:ActivatedRoute, private builder:FormBuilder) { }
  


  ngOnInit() {
    this.buildForm();
    let quot_id=this.route.snapshot.paramMap.get('cpo_id');  //display singel api id --
    this.quotation_id = quot_id;
    this.PoEntrySelectedProduct(quot_id)
    
  }
  lunchselectedlist(event){
    
    let quot_id=this.route.snapshot.paramMap.get('cpo_id')
    this.poEntryServicesService.PostLunchSelectedlist(quot_id).subscribe(data => {
      console.log(data);
      this.router.navigate(['crm/crm-home'])
    
});
  }

  PoEntrySelectedProduct(quot_id){
    this.poEntryServicesService.getPoEntrySelectedProduct(quot_id).subscribe((data)=>{  
      this. productdetailpagelist=data;
      console.log(this. productdetailpagelist);
      
  })     
  }
  submitselectproductlist(event){
   // let quot_id="24fee713-7d0e-4794-81ec-6a752cc52a64"
   let quot_id=this.route.snapshot.paramMap.get('cpo_id')
    this.quotation_id=quot_id;
    this.poEntryServicesService.postSelectedProduct(
      this.Model.product_title,
      this.Model.description,
      this.Model.model,
      this.Model.brand,
      this.Model.product_code,
      this.Model.part_no,
      this.Model.pack_size,
      this.Model.hsn_code,
      this.Model.gst,
      this.Model.quantity,
      this.Model.uom,this.Model.unit_price,quot_id).subscribe(data => {
        console.log(data);
        window.location.reload();
    
      })
    }
  LaunchopenModalDialog()
  {
    this.launch_display='block';
  }
  LaunchcloseModalDialog()
  {
    this.launch_display='none';
  }
  openModalDialog(){
    this.display='block';
  }
  closeModalDialog(){
    this.display='none';
    
  }
  buildForm(){
    this.poForm=this.builder.group({
      product_title:['',Validators.required],
     description:['',Validators.required],
     gst:['',Validators.required],
     quantity:['',Validators.required],
     uom:['',Validators.required],
     unit_price:['',Validators.required],
     
     
     
   
    });
  }
}
    