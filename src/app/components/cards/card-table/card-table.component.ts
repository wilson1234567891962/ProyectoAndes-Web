import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
})
export class CardTableComponent implements OnInit {
  visibleDetail = false;
  selectionIndex = 2;
  productsTmp = [
  ]

  product = [
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    }
    ]

  @Input()
  get color(): string {
    return this._color;
  }

  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }

  private _color = 'light';

  constructor() {
  }

  ngOnInit(): void {
    this.getProductsTmp();
  }

  getProductsTmp(): void {
    for (let i = 0; i < 10; i++) {
      if(this.productsTmp.length > 4){
          break;
      } else {
         this.productsTmp.push(this.product[i]);
      }
    }
  }

  getVisibleItemPagination(index): boolean {
    return this.product.length / index  >= 1;
  }

  checkDetailProduct() {
    this.visibleDetail = true;
  }
}
