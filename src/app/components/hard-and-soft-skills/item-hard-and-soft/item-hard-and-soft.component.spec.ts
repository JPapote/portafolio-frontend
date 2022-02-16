import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHardAndSoftComponent } from './item-hard-and-soft.component';

describe('ItemHardAndSoftComponent', () => {
  let component: ItemHardAndSoftComponent;
  let fixture: ComponentFixture<ItemHardAndSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemHardAndSoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHardAndSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
