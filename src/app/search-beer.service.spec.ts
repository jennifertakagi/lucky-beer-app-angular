import { TestBed, inject } from '@angular/core/testing';

import { SearchBeerService } from './search-beer.service';

describe('SearchBeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchBeerService]
    });
  });

  it('should be created', inject([SearchBeerService], (service: SearchBeerService) => {
    expect(service).toBeTruthy();
  }));
});
