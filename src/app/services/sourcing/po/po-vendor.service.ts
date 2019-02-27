import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//import interface data Type
import { CpoPendingDetails } from '../../../interface/sourcing/po/cpo-pending-details';
import { SourcingVendorProduct} from '../../../interface/sourcing/po/sourcing-vendor-product';
import { SourcingVendorProductVPOLineitem} from '../../../interface/sourcing/po/sourcing-vendor-product-vpolineitem';
import { UnassignedProductList } from '../../../interface/sourcing/po/unassigned-product-list';
import { SourcingVpoLineitemEdit}from '../../../interface/sourcing/po/sourcing-vpo-lineitem-edit';
@Injectable({
  providedIn: 'root'
})
export class PoVendorService {

  constructor(private http: HttpClient) { }

//Sourcing CPO Pending Details GET Method()..
  getCPOPendingDetailsList(id):Observable<CpoPendingDetails[]>{
    return this.http.get<CpoPendingDetails[]>("api/po_to_vendor/pending_cpo/"+ id +"/lineitem_details/",   //Api id ...
    {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });   
}


//Sourcing CPO vendor product GET Method()..
getSourcingCpoVenderProduct(id):Observable<SourcingVendorProduct[]>{
  return this.http.get<SourcingVendorProduct[]>("/api/po_to_vendor/pending_cpo/"+ id +"/vendor_product_segmentation/",  //Api id ...
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
 }

 //Get Unassigned Products                   
 getUnassignedCpoProducts(id):Observable<UnassignedProductList[]>{
  return this.http.get<UnassignedProductList[]>("/api/po_to_vendor/pending_cpo/"+ id +"/unassigned_lineitem/",   //Api id ...
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
 }


//SourcingVpoLineitemEdit GET method()...Component--(sourcing-vpo-lineitem-edit)
getSourcingVpoLineitemEdit(cust_id,requ_id,rece_id):Observable<SourcingVpoLineitemEdit[]>{ 
  console.log(cust_id,requ_id,rece_id)       
  return this.http.get<SourcingVpoLineitemEdit[]>("/api/po_to_vendor/pending_cpo/"+cust_id+"/vpo/"+ requ_id +"/lineitem/"+ rece_id +"/edit/", //SourcingVpoLineitemEdit database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

// SourcingVpoLineitemEdit PUT method()... .Component--(Sourcing-Vpo-Lineitem-Edit)
PostSourcingVpoLineitemedit(product_title,description, model,brand,product_code,hsn_code,pack_size,gst,uom,quantity,unit_price,cust_id,requ_id,rece_id){
  return this.http.put<SourcingVpoLineitemEdit[]>("/api/po_to_vendor/pending_cpo/"+cust_id+"/vpo/"+ requ_id+"/lineitem/"+ rece_id+"/edit/", //SourcingVpoLineitemEdit database API LInk
  {
   
    "product_title": product_title,
    "description": description,
    "model": model,
    " brand": brand,
    "product_code":  product_code,
    " hsn_code": hsn_code,
    "pack_size":  pack_size,
    "gst":gst,
    "uom":uom,
    "quantity":quantity,
    "unit_price":unit_price,
    cust_id,requ_id,rece_id
  },
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });        
}

//postdeletesourcingvpolineitemedit Delete method()....Component--(post-delete-sourcing-vpo-lineitemedit)
postdeletesourcingvpolineitemedit(cust_id,requ_id,rece_id){
  return this.http.delete<[]>("api/po_to_vendor/pending_cpo/"+ cust_id+"/vpo/"+requ_id+"/lineitem/"+ rece_id+"/edit/", //PoEntryrejected lineitem list database API LInk,
  
    {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
    }
 

}
