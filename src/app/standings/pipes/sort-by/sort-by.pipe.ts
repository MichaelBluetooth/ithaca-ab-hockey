import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any[], field: string): any[] {
    value = value.sort((a, b) => {
      if ( a[field] < b[field] ){
        return 1;
      }
      if ( a[field] > b[field] ){
        return -1;
      }
      return 0;
    
    })
    return value;
  }

}
