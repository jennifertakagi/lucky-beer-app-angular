import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBeerComponent } from './list-beer.component';

describe('ListBeerComponent', () => {
  let component: ListBeerComponent;
  let fixture: ComponentFixture<ListBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
