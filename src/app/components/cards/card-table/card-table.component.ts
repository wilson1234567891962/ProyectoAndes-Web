import {Component, OnInit, Input} from '@angular/core';
import {UtilitiesService} from '../../../services/utilities.service';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
})
export class CardTableComponent implements OnInit {
  category = '';
  store = '';
  searchIsVisible = false;
  visibleDetail = false;
  selectionIndex = 1;
  productsTmp = [];
  detailProduct : any = {};
  productSearch = [];
  categoryList = [];
  storeList = [];
  product = [
    {
      product: 'Coca Cola A1',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-20-2023-12:00:00',
        locate: 'CENTRO COMERCIAL TESTA'
      }
    },
    {
      product: 'Coca Cola A2',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-17-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Malta A3',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-16-2023-12:00:00',
        locate: 'CENTRO COMERCIZ'
      }
    },
    {
      product: 'Malta A4',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-18-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A5',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-19-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A6',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-16-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A7',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-16-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A8',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '03-16-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A9',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-16-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A10',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-16-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A11',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-16-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A12',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-16-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A13',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
         category: 'PERECEDERO',
         expiration: '02-16-2023-12:00:00',
         locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A14',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-16-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A15',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '03-16-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A16',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Andino',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'PERECEDERO',
        expiration: '02-16-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    },
    {
      product: 'Coca Cola A17',
      imageProduct: 'assets/img/bootstrap.jpg',
      store: 'Pepe Sierra',
      supplier: 'Coca Cola',
      importer: 'N/A',
      amount: 10,
      detail: {
        category: 'VITALICIO',
        expiration: '02-16-2023-12:00:00',
        locate: 'CENTRO COMERCIAL ANDINO'
      }
    }
    ];

  @Input()
  get color(): string {
    return this._color;
  }

  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';

  constructor(private utilitiesService:UtilitiesService) {
  }

  ngOnInit(): void {
    this.goItemPagination(1, this.product);
    this.getCategories();
    this.getStore();
  }

  getCategories(): void {
    for (const item of this.product) {
      if(!this.categoryList.includes(item.detail.category)) {
        this.categoryList.push(item.detail.category);
      }
    }
  }

  getStore(): void {
    for (const item of this.product) {
      if(!this.storeList.includes(item.store)) {
        this.storeList.push(item.store);
      }
    }
  }

  goItemPagination(count, data){
    this.visibleDetail = false;
    data = !this.searchIsVisible ? this.product : this.productSearch;
    const paginate = this.paginate(data.length, count, 5, 5);
    if(count < 1 || count > paginate.totalPages ){
      return;
    }
    this.selectionIndex = count;
    this.productsTmp = new Array();
    for (let i = paginate.startIndex; i <= paginate.endIndex; i++) {
      this.productsTmp.push(data[i]);
    }
  }

  onChangeEvent(event: any){
    const text = event.target.value.toString().toLowerCase();
    this.store = '';
    this.category = '';
    if(text.length < 0 ){
      this.searchIsVisible = false;
      this.productSearch = [];
      this.goItemPagination(this.selectionIndex, this.product);
      return;
    }
    this.searchIsVisible = true;
    const result = this.product.filter(it =>
      it.importer.toString().toLowerCase().includes(text)||
      it.store.toString().toLowerCase().includes(text) ||
      it.product.toString().toLowerCase().includes(text));
    this.productSearch = result;
    this.productsTmp = new Array();
    this.selectionIndex = 1;
    this.goItemPagination(this.selectionIndex, result);
  }

  checkDetailProduct(index) {
    this.visibleDetail = true;
    this.detailProduct = !this.searchIsVisible ? this.product[index].detail : this.productSearch[index].detail;
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

  search()  {
    if(this.store === ''  && this.category === '')  {
      return;
    }
    const result = this.product.filter(it =>
      it.store.toString().toLowerCase() ===  this.store.toLowerCase() ||
      it.detail.category.toString().toLowerCase() === this.category.toLowerCase().trim()
    );
    console.log(result);
    this.searchIsVisible = true;
    this.productSearch = result;
    this.productsTmp = new Array();
    this.selectionIndex = 1;
    this.goItemPagination(this.selectionIndex, result);
  }

  clean()  {
    this.store = '';
    this.category = '';
    this.searchIsVisible = false;
    this.productSearch = [];
    this.goItemPagination(this.selectionIndex, this.product);
  }

  convertDate(value){
    return new Date(value);
  }
  expedicionValidation(value){
    return !this.utilitiesService.validatorDate(this.convertDate(value))
  }
}
