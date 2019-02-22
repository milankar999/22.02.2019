import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotationSearch'
})
export class QuotationSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter((el)=>{
      //searching element of the leave_type Employee,manager,admin
        if(el.quotation_no.indexOf(args)===-1){
          return false;
        }
        else {
          return true;
        }
      });
    }
  }