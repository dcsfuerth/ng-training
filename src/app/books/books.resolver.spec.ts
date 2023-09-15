import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { booksResolver } from './books.resolver';

describe('booksResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => booksResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
