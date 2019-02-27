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

  customer_id="";
  requester_id=""; 
  receiver_id="";
   

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


  constructor(private   PoVendorServic:PoVendorService,
    private router:Router, private route:ActivatedRoute, private builder:FormBuilder) { }

  ngOnInit() {
 
    let cust_id=this.route.snapshot.paramMap.get('cpo_id');
    let requ_id=this.route.snapshot.paramMap.get('vpo_id');
    let rece_id=this.route.snapshot.paramMap.get('lineitem_id');
    this.customer_id = cust_id;
    this.requester_id = requ_id;
    this.receiver_id=rece_id;
    this.SourcingVpoLineitemEdit(cust_id,requ_id,rece_id);
    console.log(this.description);
}
SourcingVpoLineitemEdit(cust_id,requ_id,rece_id){
this.PoVendorServic.getSourcingVpoLineitemEdit(cust_id,requ_id,rece_id).subscribe((data)=>{
  
  this.lineitem_object = data;   //object
  
  this.id=data['id'];
  this.product_title=data['product_title'];
  this.description=data['description'];
  this.model=data['model'];
  this.brand=data['brand'];
  this.hsn_code=data['hsn_code'];
  this.pack_size=data['pack_size'];
  this.gst=data['gst'];
  this.uom=data['uom'];
  this.quantity=data['quantity'];
  this.unit_price=data['unit_price'];
  console.log(data);
  console.log(this.description);
  console.log(this.product_title);
  });
 }

 submitvpolineitemeditlist(event){
  let cust_id=this.route.snapshot.paramMap.get('cpo_id');
  this.customer_id = cust_id;
  let requ_id=this.route.snapshot.paramMap.get('vpo_id');
  this.requester_id = requ_id;
  let rece_id=this.route.snapshot.paramMap.get('lineitem_id');
  this.receiver_id=rece_id;

  this.PoVendorServic.PostSourcingVpoLineitemedit(
    this.Model.id,
    this.Model.product_title,
    this.Model.description,
    this.Model.model,
    this.Model.brand,
    this.Model.hsn_code,
    this.Model.pack_size,
    this.Model.gst,
    this.Model.uom,
    this.Model.quantity,
    this.Model.unit_price,
    cust_id,requ_id,rece_id, 
  ).subscribe(data=>{
      this.lineitem_object=data;
      console.log(data);
      //this.router.navigate(['/api/po_to_vendor/pending_cpo/24fee713-7d0e-4794-81ec-6a752cc52a64/vpo/031d73a5-ea70-456c-9c7b-e461c9022ce4/lineitem/00596812-d867-4631-afbb-c281bc000b95/edit/']);
    })
}

deletesourcingvpolineitemlist(event){
  let cust_id=this.route.snapshot.paramMap.get('cpo_id');
  this.customer_id = cust_id;
  let requ_id=this.route.snapshot.paramMap.get('vpo_id');
  this.requester_id = requ_id;
  let rece_id=this.route.snapshot.paramMap.get('lineitem_id');
  this.receiver_id=rece_id;
  this.PoVendorServic.postdeletesourcingvpolineitemedit(cust_id,requ_id,rece_id ).subscribe(data=>{
    console.log(data);
  this.router.navigate(['sourcing/sourcing-po/'+ cust_id +'/souring-cpo-vendor-product']);
})

}

 
openModalDialog(){
  this.display='block';
}
closeModalDialog(){
  this.display='none';

}
}





//' /api/po_to_vendor/pending_cpo/"+cust_id+"/vpo/"+requ_id+"/lineitem/"+rece_id+"/edit/ 