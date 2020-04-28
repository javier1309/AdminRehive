import { TestBed } from '@angular/core/testing';

import { AccountcurrencyService } from './accountcurrency.service';

describe('AccountcurrencyService', () => {
  let service: AccountcurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountcurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
