import { TestBed } from '@angular/core/testing';

import { ProdutoApiService } from './produto-api.service';

describe('ProdutoApiService', () => {
  let service: ProdutoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
