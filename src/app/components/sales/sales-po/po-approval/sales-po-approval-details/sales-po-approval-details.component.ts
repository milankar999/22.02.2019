import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router'; 
import{ HttpResponse} from '@angular/common/http';
import { PoApprovalService } from 'src/app/services/sales/po/po-approval.service';



@Component({
  selector: 'app-sales-po-approval-details',
  templateUrl: './sales-po-approval-details.component.html',
  styleUrls: ['./sales-po-approval-details.component.css']
})
export class SalesPoApprovalDetailsComponent implements OnInit {
  query:string='';
  SalesPoApprovallist:Object[]=[];
  public requestorId ;
  sales_id="";

  constructor(private PoApprovalService:PoApprovalService,
    private router:Router, private route:ActivatedRoute,  ) { }

  ngOnInit() {
    let sal_id=this.route.snapshot.paramMap.get('cpo_id');  //display singel api id --
    this.sales_id =sal_id;
    this.SalesPoApprovalDetails(sal_id)
  }

  SalesPoApprovalDetails(sal_id){
   this.PoApprovalService.getSalesPoApprovalDetails(sal_id).subscribe((data)=>{  
     this.SalesPoApprovallist=data;
     console.log(this.SalesPoApprovallist);
     
  })     
  }
}