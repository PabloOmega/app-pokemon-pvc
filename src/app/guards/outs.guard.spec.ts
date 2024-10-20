import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { outsGuard } from './outs.guard';

describe('outsGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => outsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
