import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFormat'
})
export class AlbumTitleFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return null;
    }

    const words = value.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (i === 0 || !this.isPrep(words[i])) {
        words[i] = this.toTitleCase(words[i]);
      } else {
        words[i] = words[i].toLowerCase();
      }
    }
    return words.join(' ');
  }

  isPrep(word: string): boolean {
    const preps = [
      'of',
      'the',
      'if',
      'an',
      'a',
      'at',
      'and',
      'von',
      'from',
      'to'
    ];

    return preps.includes(word.toLowerCase());
  }

  toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

}
