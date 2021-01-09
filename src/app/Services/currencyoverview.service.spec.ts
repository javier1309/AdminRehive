import { TestBed } from '@angular/core/testing';	

import { CurrencyoverviewService } from './currencyoverview.service';	

describe('CurrencyoverviewService', () => {	
  let service: CurrencyoverviewService;	

  beforeEach(() => {	
    TestBed.configureTestingModule({});	
    service = TestBed.inject(CurrencyoverviewService);	
  });	

  it('should be created', () => {	
    expect(service).toBeTruthy();	
  });	
});