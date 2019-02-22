import { Component, OnInit } from '@angular/core';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-po-entry-edit-selected-product',
  templateUrl: './po-entry-edit-selected-product.component.html',
  styleUrls: ['./po-entry-edit-selected-product.component.css']
})
export class PoEntryEditSelectedProductComponent implements OnInit {
  Model : any={};
  poentryeditselectproduct:object[]=[];
  producttitle="";
  descriptions="";
  models="";
  brands="";
  product_codes="";
  part_nos="";
  pack_sizes="";
  hsn_codes="";
  gst_no="";
  quantitys="";
  uom_no="";
  unit_prices="";
  quotation_id="";
  product_id="";


  constructor(private PoEntryServicesService:PoEntryServicesService,private route:ActivatedRoute, private router:Router
     ) { }

  ngOnInit() {
    let quot_id=this.route.snapshot.paramMap.get('cpo_id');
    this.quotation_id=quot_id;
    let prod_id=this.route.snapshot.paramMap.get('selected-product');
    this.product_id=prod_id;
    this.PoEntryEditSelectProduct(quot_id,prod_id);
  }
  PoEntryEditSelectProduct(quot_id,prod_id){
    this.PoEntryServicesService.getPoEntryEditSelectProduct(quot_id,prod_id).subscribe((data)=>{  
      this.producttitle=data['product_title'];
      this.descriptions=data['description'];
      this.models=data['model'];
      this.brands=data['brand'];
      this.product_codes=data['product_code'];
      this.part_nos=data['part_no'];
      this.pack_sizes=data['pack_size'];
      this.hsn_codes=data['hsn_code'];
      this.gst_no=data['gst'];
      this.quantitys=data['quantity'];
      this.uom_no=data['uom'];
      this.unit_prices=data['unit_price'];
     console.log (data);
   

  });
}
submiteditproductlist(event){
  let quot_id=this.route.snapshot.paramMap.get('cpo_id');
  this.quotation_id=quot_id;
  let prod_id=this.route.snapshot.paramMap.get('selected-product');
  this.product_id=prod_id;
  this.PoEntryServicesService.putEditSelectedProduct(
    this.Model.product_title,
    this.Model.description,
    this.Model.model,
    this.Model.brand,
    this.Model.product_code,
    this.Model.part_no,
    this.Model.pack_size,
    this.Model.hsn_code,this.Model.gst,
    this.Model.quantity,
    this.Model.uom,this.Model.unit_price,quot_id,prod_id).subscribe(data => {
      console.log(data);
      this.router.navigate(['crm/po-entry/cpo/'+quot_id+'/selected-product'])
    })
  }
}