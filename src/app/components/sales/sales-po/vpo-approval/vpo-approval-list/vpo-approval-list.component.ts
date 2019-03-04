import { Component, OnInit } from '@angular/core';
import { PoApprovalService } from 'src/app/services/sales/po/po-approval.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vpo-approval-list',
  templateUrl: './vpo-approval-list.component.html',
  styleUrls: ['./vpo-approval-list.component.css']
})
export class VpoApprovalListComponent implements OnInit {
  poapprovallist:object[]=[];

   vendor:object[]=[];

  constructor(private PoApprovalService:PoApprovalService ,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
   this. Vpo_Approval_List() 
  }
  Vpo_Approval_List(){

    this.PoApprovalService.getVpo_Approval_List().subscribe(data=>{
      this. poapprovallist=data;
      console.log(data);
    })
  }
}
