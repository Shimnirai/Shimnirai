import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomLayerComponent } from './bottom-layer.component';

describe('BottomLayerComponent', () => {
  let component: BottomLayerComponent;
  let fixture: ComponentFixture<BottomLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomLayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
