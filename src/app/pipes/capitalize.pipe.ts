import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})

// Pipe to capitalize first letter of string expressiont, and remove '_'(underscore) from sentence
// If allWords is true, all words of sentence wil capitalize, else, olny the first letter of sentence will capitalize
export class CapitalizePipe implements PipeTransform {

  transform(value: any, allWords: boolean): any {
    if (value && allWords) {

      let textWithSpaces = value.replace(/_/g, ' ');

      return textWithSpaces.replace(/\b\w/g, first => first.toLocaleUpperCase()).trim();

    } else {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

}
