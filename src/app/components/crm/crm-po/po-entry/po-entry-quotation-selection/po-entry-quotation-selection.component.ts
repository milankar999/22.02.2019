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
  model:any={};              //vadilation calling model in html in forms...
  quotationselection:Object[]=[];
  quotation_id="";         //table fiilds.
  quotation_no=[];
  quotation_date;
  rfp;
  enquiry_reference;
  CPOResponsequot:Object[]=[];
  selected_data=[];
  
  
  
  
constructor(private poEntryServicesService:PoEntryServicesService,
  private router:Router,private route:ActivatedRoute, private formBuilder: FormBuilder) { 
   
}
drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex,
                      );
  }
  console.log(event.container.data);
  this.selected_data = event.container.data;
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



  for(let d of this.selected_data)
    this.quotation_no.push(d['quotation_no']);


 let quot_id=this.route.snapshot.paramMap.get('cpo_id');  //display singel api id --
  this.poEntryServicesService.PostQuotationlist(this.quotation_no,quot_id).
  subscribe(data => {
    console.log(data);
    
    console.log(this.quotation_no);
   this.router.navigate(['crm/po-entry/'+quot_id+'/quotation-selection/production-selection']);
   
});
}

}