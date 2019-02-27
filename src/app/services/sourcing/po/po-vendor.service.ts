import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//import interface data Type
import { CpoPendingDetails } from '../../../interface/sourcing/po/cpo-pending-details';
import { SourcingVendorProduct} from '../../../interface/sourcing/po/sourcing-vendor-product';
import { SourcingVendorProductVPOLineitem} from '../../../interface/sourcing/po/sourcing-vendor-product-vpolineitem';
import { UnassignedProductList } from '../../../interface/sourcing/po/unassigned-product-list';
import { Postassigned } from '../../../interface/sourcing/po/postassigned';
import { SourcingNewVpo  } from '../../../interface/sourcing/po/sourcing-new-vpo';
import { SourcingVpoContactPerson } from '../../../interface/sourcing/po/sourcing-vpo-contact-person';
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
 Postassignvendorlist(vpo_lineitems,id,vpo_id){
   console.log(vpo_lineitems);
  return this.http.post<Postassigned[]>("/api/po_to_vendor/pending_cpo/"+id+"/vpo/"+vpo_id+"/assign_lineitems/",   //Api id ...
  {
      
    "vpo_lineitems":vpo_lineitems
  },
{
  headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
});   
}
deleteLineItemEdit(cpo_id,vpo_id,lineitem_id){
  console.log(cpo_id);
  console.log(vpo_id);
  console.log(lineitem_id);
  

  return this.http.delete("/api/po_to_vendor/pending_cpo/"+cpo_id+"/vpo/"+vpo_id+"/lineitem/"+lineitem_id+"/edit/",   //Api id ...
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
 }
 getSourcingNewVpoProduct(cpo_id):Observable< SourcingNewVpo[]>{
  return this.http.get< SourcingNewVpo[]>("api/po_to_vendor/pending_cpo/"+cpo_id+"/new_vendor_selection/",  //Api id ...
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
 }
 getSourcingVpoContactPerson(cpo_id,vpocontact_id):Observable< SourcingVpoContactPerson []>{
  return this.http.get< SourcingVpoContactPerson []>("/api/po_to_vendor/pending_cpo/"+cpo_id+"/vendor/"+vpocontact_id+"/contact_person_selection/",  //Api id ...
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
 }
 Postsubmitvpocontactlist(name,mobileNo1,mobileNo2,email1,email2,supplier_name,cpo_id,vpocontact_id){
  return this.http.post<SourcingVpoContactPerson>("/api/po_to_vendor/pending_cpo/"+cpo_id+"/vendor/"+vpocontact_id+"/contact_person_selection/",//employee leave req database API Link
      {
       "name" : name,
       "mobileNo1" : mobileNo1,
       "mobileNo2" : mobileNo2,
       "email1" : email1,
       "email2" : email2,
       "supplier_name":supplier_name
},{
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
});

}
postSourcingVpoProduct(name,location,address,city,state,pin,country,office_email1,office_email2,office_phone1, office_phone2,gst_number,payment_term,advance_persentage,inco_term,cpo_id){
  return this.http.post<SourcingNewVpo>("api/po_to_vendor/pending_cpo/"+cpo_id+"/new_vendor_selection/",//employee leave req database API Link
  {
   "name" : name,
   "location": location,
   "address" : address,
   "city" : city,
   "state": state,
   "pin": pin,
   "country":country,
   "office_email1":office_email1,
   "office_email2":office_email2,
   "office_phone1":office_phone1,
   "office_phone2":office_phone2,
   "gst_number":gst_number,
   "payment_term":payment_term,
   "advance_persentage":advance_persentage,
   "inco_term":inco_term
  
},{
headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
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
    "brand": brand,
    "product_code":  product_code,
    "hsn_code": hsn_code,
    "pack_size":  pack_size,
    "gst":gst,
    "uom":uom,
    "quantity":quantity,
    "unit_price":unit_price,
    cust_id,
    requ_id,
    rece_id
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

