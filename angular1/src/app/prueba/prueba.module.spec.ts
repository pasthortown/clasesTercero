import { PruebaModule } from './prueba.module';

describe('PruebaModule', () => {
  let pruebaModule: PruebaModule;

  beforeEach(() => {
    pruebaModule = new PruebaModule();
  });

  it('should create an instance', () => {
    expect(pruebaModule).toBeTruthy();
  });
});
