import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
})
export class CardTableComponent implements OnInit {
  visibleDetail = false;
  selectionIndex = 1;
  productsTmp = [
  ]

  product = [
    {
      product: 'Coca Cola A1',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A2',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A3',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A4',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A5',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A6',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A7',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A8',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A9',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A10',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A11',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A12',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A13',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A14',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A15',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A16',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10
    },
    {
      product: 'Coca Cola A17',
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
    this.goItemPagination(1);
  }

  goItemPagination(count){
    console.log(count);
    const paginate = this.paginate(this.product.length, count, 5, 5);
    console.log(paginate);
    if(count < 1 || count > paginate.totalPages ){
      return;
    }
    this.selectionIndex = count;
    this.productsTmp = new Array();
    for (let i = paginate.startIndex; i <= paginate.endIndex; i++) {
      this.productsTmp.push(this.product[i]);
    }
  }

  checkDetailProduct() {
    this.visibleDetail = true;
  }

  paginate(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 10,
    maxPages: number = 10
  ) {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    let startPage: number;
    let endPage: number;
    if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
    } else {
      // total pages more than max so calculate start and end pages
      const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // current page near the end
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        // current page somewhere in the middle
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }

}
