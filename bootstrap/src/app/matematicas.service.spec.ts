import { TestBed, inject } from '@angular/core/testing';

import { MatematicasService } from './matematicas.service';

describe('MatematicasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatematicasService]
    });
  });

  it('should be created', inject([MatematicasService], (service: MatematicasService) => {
    expect(service).toBeTruthy();
  }));
});
