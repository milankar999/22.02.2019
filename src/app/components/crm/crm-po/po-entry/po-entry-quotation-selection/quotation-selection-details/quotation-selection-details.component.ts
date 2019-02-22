import { Component, OnInit } from '@angular/core';
import { PoEntryServicesService } from 'src/app/services/crm/po/po-entry/po-entry-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotation-selection-details',
  templateUrl: './quotation-selection-details.component.html',
  styleUrls: ['./quotation-selection-details.component.css']
})
export class QuotationSelectionDetailsComponent implements OnInit {

 query:string='';
 quotationdetails:Object[]=[];
 public quotationId;
 quotation_id="";

  constructor(private poEntryServicesService:PoEntryServicesService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('quotation_no');
    this.quotation_id=id;
    this.QuotationDetails(id);
    

  }
QuotationDetails(id){
  this.poEntryServicesService.getQuotationDetails(id).subscribe((data)=>{
    this.quotationdetails=data;
    console.log(id);
    console.log(this.quotationdetails);
  })

}
}
