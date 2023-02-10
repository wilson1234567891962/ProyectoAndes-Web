import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
})
export class CardTableComponent implements OnInit {
  visibleDetail = false;
  product = [
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
  }]

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';
  constructor() {}

  ngOnInit(): void {}

  checkDetailProduct(){
    this.visibleDetail = true;
  }
}
