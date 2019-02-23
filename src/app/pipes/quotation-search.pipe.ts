import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotationSearch'
})
export class QuotationSearchPipe implements PipeTransform {

  transform(value: any, quotationSearch: string, item:any){
    if(!quotationSearch){
      return value;
    }else if (value){
   
    
      return value.filter(item=> {
        for (let key in item) {
          if ((typeof item[key] === 'string' || item[key] instanceof String) &&
            (item[key].indexOf(quotationSearch) !== -1)) {
            return true;
          }
        }
      });
    }
  }
}

