import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundPipe'
})
export class RoundPipePipe implements PipeTransform {

  transform (input:number) {
 return Number((input).toFixed(2))
    }

}
