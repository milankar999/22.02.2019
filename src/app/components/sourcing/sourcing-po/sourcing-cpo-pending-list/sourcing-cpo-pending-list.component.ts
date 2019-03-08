import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http'; //services name import
import { PoVendorService } from 'src/app/services/sourcing/po/po-vendor.service';

@Component({
  selector: 'app-sourcing-cpo-pending-list',
  templateUrl: './sourcing-cpo-pending-list.component.html',
  styleUrls: ['./sourcing-cpo-pending-list.component.css']
})
export class SourcingCpoPendingListComponent implements OnInit {
  query:string='';
    pendinglist:Object[]=[];
    display='none';
  constructor(private PoVendorService:PoVendorService,
    private router:Router) {
   
   }
  ngOnInit() {
    this.CpoPendingList()
  }

  CpoPendingList(){

  this.PoVendorService.getCPOPendingList().subscribe((data)=>{  
    this.pendinglist=data;  
    console.log(data);
})
} 

//model display   
openModalDialog(){
  this.display='block';
}
closeModalDialog(){   //when cancel
  this.display='none';

}

}
