import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulebComponent } from './moduleb.component';

describe('ModulebComponent', () => {
  let component: ModulebComponent;
  let fixture: ComponentFixture<ModulebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulebComponent]
    });
    fixture = TestBed.createComponent(ModulebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
