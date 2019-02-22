import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';



@Component({
  selector: 'app-po-entry-product-selection',
  templateUrl: './po-entry-product-selection.component.html',
  styleUrls: ['./po-entry-product-selection.component.css']
})
export class PoEntryProductSelectionComponent implements OnInit {
  form: FormGroup;
  quotation_id="";
  item_list=[];
 products=[];
 quotation_lineitems = [];
 selected_lineitem_list: Array<{id: string}> = [];
 
  
  display='none';
  constructor(private poEntryServicesService:PoEntryServicesService,
    private router:Router,private route:ActivatedRoute, private formBuilder: FormBuilder) { }
    
  ngOnInit() {
    let quot_id=this.route.snapshot.paramMap.get('cpo_id');  //display singel api id --
    this.quotation_id = quot_id;
    this.PoProductSelectionPage(quot_id)
  }

  PoProductSelectionPage(quot_id){
    console.log(quot_id);
    this.poEntryServicesService.getPoProductSelectionList(quot_id).subscribe((data)=>{  // get method
     this.products=data;
      console.log(this.products);  
      
  })
}
productsubmit(event) {
  let quot_id=this.route.snapshot.paramMap.get('cpo_id');
  
  for(let item in this.selected_lineitem_list)
  {
    this.item_list.push(this.selected_lineitem_list[item]['id']);
  }
  console.log(this.item_list);

    this.poEntryServicesService.PostProductSelectedPage(this.item_list,quot_id).
  subscribe(data => {
    console.log(data);
   this.router.navigate(['crm/po-entry/cpo/'+quot_id+'/selected-product']);
    
  });
}  
 
  checkLineitem(event,id) {
    if(event.target.checked) {
        this.selected_lineitem_list.push({id:event.target.name});
    } 
    else {
      this.selected_lineitem_list.splice(event.target.name,1);
    }
}
}

