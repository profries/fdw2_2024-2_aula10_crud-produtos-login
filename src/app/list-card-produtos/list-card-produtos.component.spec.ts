import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardProdutosComponent } from './list-card-produtos.component';

describe('ListCardProdutosComponent', () => {
  let component: ListCardProdutosComponent;
  let fixture: ComponentFixture<ListCardProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCardProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
