import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExperienceComponent } from './item-experience.component';

describe('ItemExperienceComponent', () => {
  let component: ItemExperienceComponent;
  let fixture: ComponentFixture<ItemExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
