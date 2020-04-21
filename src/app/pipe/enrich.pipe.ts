import { Pipe, PipeTransform } from '@angular/core';

const lookup = {
  'Wien': 'Wien',
  'Burgenland': 'Eisenstadt',
  'Kärnten': 'Klagenfurt',
  'Niederösterreich': 'St. Pölten',
  'Oberösterreich': 'Linz',
  'Salzburg': 'Salzburg',
  'Steiermark': 'Graz',
  'Tirol': 'Innsbruck',
  'Vorarlberg': 'Bregenz'
}

@Pipe({ name: 'enrichPipe'})
export class EnrichPipe implements PipeTransform {
  transform(value: string): string {
    return lookup[value]
  }

}