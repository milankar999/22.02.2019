import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-po-entry-quotation-selection',
  templateUrl: './po-entry-quotation-selection.component.html',
  styleUrls: ['./po-entry-quotation-selection.component.css']
})
export class PoEntryQuotationSelectionComponent implements OnInit {
  query:string='';
  quotationselectionlist:Object[]=[];
  model:any={};   
  item_list=[];           //vadilation calling model in html in forms...
  quotation_id="";         //table fiilds.
  quotation_no=[];
  CPOResponsequot:Object[]=[];
  selected_data=[];
  selected_quotationitem_list: Array<{id: string}> = [];
  

constructor(private poEntryServicesService:PoEntryServicesService,
  private router:Router,private route:ActivatedRoute, private formBuilder: FormBuilder) { 
   
}


  ngOnInit() {
    let quot_id=this.route.snapshot.paramMap.get('cpo_id');  //display singel api id --
    this.quotation_id = quot_id;
    this.PoQuotationSelectionPage(quot_id)
    
  }
  PoQuotationSelectionPage(quot_id){
    console.log(quot_id);
    this.poEntryServicesService.getQuotationSelectionPage(quot_id).subscribe((data)=>{  // get method
      this.quotationselectionlist=data;
      console.log(this.quotationselectionlist);  
      
  })
}
dragid(event){
 let quot_id=this.route.snapshot.paramMap.get('cpo_id'); 
 
 for(let item in this. selected_quotationitem_list)
  {
    this.item_list.push(this. selected_quotationitem_list[item]['id']);
 }
  console.log(this.item_list);
 //display singel api id --
  this.poEntryServicesService.PostQuotationlist(this.item_list,quot_id).
  subscribe(data => {
    console.log(data);
   this.router.navigate(['crm/po-entry/'+quot_id+'/quotation-selection/product-selection']);
   
});
}
checkQuotationitem(event,id) {
  if(event.target.checked) {
      this. selected_quotationitem_list.push({id:event.target.name});
      console.log(this.selected_quotationitem_list);
    
     
  } 
  else {
    this. selected_quotationitem_list.splice(event.target.name,1);
    console.log(this.selected_quotationitem_list)
  }
}

}