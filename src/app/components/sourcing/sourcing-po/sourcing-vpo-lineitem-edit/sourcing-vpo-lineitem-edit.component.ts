import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,Validators,AbstractControl } from '@angular/forms';
import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';
import { PoVendorService } from 'src/app/services/sourcing/po/po-vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-sourcing-vpo-lineitem-edit',
  templateUrl: './sourcing-vpo-lineitem-edit.component.html',
  styleUrls: ['./sourcing-vpo-lineitem-edit.component.css']
})
export class SourcingVpoLineitemEditComponent implements OnInit {
 
  query:string='';
  public requestorId;
  display='none';
  poForm :FormGroup;
  Model:any={}
  lineitem_object:object[]=[];   //object creating

  cpo_id="";
  vpo_id=""; 
  lineitem_id="";
   

  id = "";
  product_title = "";
  description = "";
  model = "";
  brand = "";
  product_code = "";
  hsn_code = "";
  pack_size = "";
  gst = 0;
  uom = "";
  quantity = 0;
  unit_price = 0;
  discount = 0;


  constructor(private   PoVendorServic:PoVendorService,
    private router:Router, private route:ActivatedRoute, private builder:FormBuilder) { }

  ngOnInit() {
 
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    let lineitem_id=this.route.snapshot.paramMap.get('lineitem_id');
    this.cpo_id = cpo_id;
    this.vpo_id = vpo_id;
    this.lineitem_id=lineitem_id;
    this.SourcingVpoLineitemEdit(cpo_id,vpo_id,lineitem_id);
    console.log(this.description);
}
SourcingVpoLineitemEdit(cpo_id,vpo_id,lineitem_id){
this.PoVendorServic.getSourcingVpoLineitemEdit(cpo_id,vpo_id,lineitem_id).subscribe((data)=>{
  
  this.lineitem_object = data;   //object
  
  this.id=data['id'];
  this.product_title=data['product_title'];
  this.description=data['description'];
  this.model=data['model'];
  this.brand=data['brand'];
  this.product_code=data['product_code'];
  this.hsn_code=data['hsn_code'];
  this.pack_size=data['pack_size'];
  this.gst=data['gst'];
  this.uom=data['uom'];
  this.quantity=data['quantity'];
  this.unit_price=data['unit_price'];
  this.discount=data['discount'];
  console.log(data);
  console.log(this.description);
  console.log(this.product_title);
  });
 }

 submitvpolineitemeditlist(event){
  let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    let lineitem_id=this.route.snapshot.paramMap.get('lineitem_id');
    this.cpo_id = cpo_id;
    this.vpo_id = vpo_id;
    this.lineitem_id=lineitem_id;

  this.PoVendorServic.PostSourcingVpoLineitemedit(
  
    this.Model.product_title,
    this.Model.description,
    this.Model.model,
    this.Model.brand,
    this.Model.product_code,
    this.Model.hsn_code,
    this.Model.pack_size,
    this.Model.gst,
    this.Model.uom,
    this.Model.quantity,
    this.Model.unit_price,
    this.Model.discount,
    cpo_id,vpo_id,lineitem_id,
 
  ).subscribe(data=>{
      this.lineitem_object=data;
      console.log(data);
      console.log(cpo_id);
      console.log(vpo_id);
      console.log(lineitem_id);
     this.router.navigate(['sourcing/sourcing-po/'+ cpo_id +'/souring-cpo-vendor-product']);  //go back to souring-cpo-vendor-product component
    })
     
}

deletesourcingvpolineitemlist(event){
  let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    let lineitem_id=this.route.snapshot.paramMap.get('lineitem_id');
    this.cpo_id = cpo_id;
    this.vpo_id = vpo_id;
    this.lineitem_id=lineitem_id;
  this.PoVendorServic.postdeletesourcingvpolineitemedit( cpo_id,vpo_id,lineitem_id ).subscribe(data=>{
    console.log(data);
  this.router.navigate(['sourcing/sourcing-po/'+ cpo_id +'/souring-cpo-vendor-product']);
})

}

 
openModalDialog(){
  this.display='block';
}
closeModalDialog(){
  this.display='none';

}
}
