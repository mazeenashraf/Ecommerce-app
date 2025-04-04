import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDeatilsComponent } from './categories-deatils.component';

describe('CategoriesDeatilsComponent', () => {
  let component: CategoriesDeatilsComponent;
  let fixture: ComponentFixture<CategoriesDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesDeatilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
