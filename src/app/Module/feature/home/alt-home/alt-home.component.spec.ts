import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltHomeComponent } from './alt-home.component';

describe('AltHomeComponent', () => {
  let component: AltHomeComponent;
  let fixture: ComponentFixture<AltHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
