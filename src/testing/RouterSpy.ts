export function createRouterSpy() {
  return jasmine.createSpyObj('Router', ['navigate']);
}