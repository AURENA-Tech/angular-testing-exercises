import { EnrichPipe } from './enrich.pipe';

describe('Enrich Pipe', () => {
  it('create an instance', () => {
    const pipe = new EnrichPipe(); // * pipe instantiation
    expect(pipe).toBeTruthy();
  });

  it('capital of Wien should be Wien', () => {
    // * arrange
    const pipe = new EnrichPipe();

    // * act
    const ret = pipe.transform('Wien');

    // * assert
    expect(ret).toBe('Wien');
  });

  it('capital of Burgenland should be Eisenstadt', () => {
    // * arrange
    const pipe = new EnrichPipe();

    // * act
    const ret = pipe.transform('Burgenland');

    // * assert
    expect(ret).toBe('Eisenstadt');
  });

  it('capital of Kärnten should be Klagenfurt', () => {
    // * arrange
    const pipe = new EnrichPipe();

    // * act
    const ret = pipe.transform('Kärnten');

    // * assert
    expect(ret).toBe('Klagenfurt');
  });

  it('capital of Niederösterreich should be St. Pölten', () => {
    // * arrange
    const pipe = new EnrichPipe();

    // * act
    const ret = pipe.transform('Niederösterreich');

    // * assert
    expect(ret).toBe('St. Pölten');
  });

  it('capital of Oberösterreich should be Linz', () => {
    // * arrange
    const pipe = new EnrichPipe();

    // * act
    const ret = pipe.transform('Oberösterreich');

    // * assert
    expect(ret).toBe('Linz');
  });

  it('capital of Salzburg should be Salzburg', () => {
    // * arrange
    const pipe = new EnrichPipe();

    // * act
    const ret = pipe.transform('Salzburg');

    // * assert
    expect(ret).toBe('Salzburg');
  });

  it('capital of Steiermark should be Graz', () => {
    // * arrange
    const pipe = new EnrichPipe();

    // * act
    const ret = pipe.transform('Steiermark');

    // * assert
    expect(ret).toBe('Graz');
  });

  it('capital of Tirol should be Innsbruck', () => {
    // * arrange
    const pipe = new EnrichPipe();

    // * act
    const ret = pipe.transform('Tirol');

    // * assert
    expect(ret).toBe('Innsbruck');
  });

  it('capital of Vorarlberg should be Bregenz', () => {
    // * arrange
    const pipe = new EnrichPipe();

    // * act
    const ret = pipe.transform('Vorarlberg');

    // * assert
    expect(ret).toBe('Bregenz');
  });

});

