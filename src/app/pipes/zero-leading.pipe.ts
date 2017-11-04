import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroLeading'
})

// Add leading zeros based in size number
export class ZeroLeadingPipe implements PipeTransform {

  transform(num: number, size: number): string {
    let s = num + '';
    while (s.length < size) { s = '0' + s };
    return s;
  }

}
