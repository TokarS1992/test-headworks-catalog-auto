import { SlugifyModule } from './slugify.module';

describe('SlugifyModule', () => {
  let slugifyModule: SlugifyModule;

  beforeEach(() => {
    slugifyModule = new SlugifyModule();
  });

  it('should create an instance', () => {
    expect(slugifyModule).toBeTruthy();
  });
});
