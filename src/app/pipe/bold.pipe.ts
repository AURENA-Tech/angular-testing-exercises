import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'bold',
  pure: false
})
export class BoldPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}
  
  transform(value: string): any {
    const content = `<b>${this.sanitizer.sanitize(SecurityContext.HTML, value)}</b>`;
    //const content = `<b>${value}</b>`;
    return content;
    //return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}


