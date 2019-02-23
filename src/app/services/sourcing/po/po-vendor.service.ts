import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//import interface data Type
import { CpoPendingDetails } from '../../../interface/sourcing/po/cpo-pending-details';
import { SourcingVendorProduct} from '../../../interface/sourcing/po/sourcing-vendor-product';
import { SourcingVendorProductVPOLineitem} from '../../../interface/sourcing/po/sourcing-vendor-product-vpolineitem';
import { UnassignedProductList } from '../../../interface/sourcing/po/unassigned-product-list';
import { Postassigned } from '../../../interface/sourcing/po/postassigned';


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

}
