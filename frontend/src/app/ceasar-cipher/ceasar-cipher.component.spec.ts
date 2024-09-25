import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeasarCipherComponent } from './ceasar-cipher.component';

describe('CeasarCipherComponent', () => {
  let component: CeasarCipherComponent;
  let fixture: ComponentFixture<CeasarCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeasarCipherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeasarCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
