import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() {
  }

  validatorsFields(input) {
    return input !== undefined && input !== null && input !== 'null' && input.length !== 0;
  }

  validatorsEmail(input) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (!input.match(validRegex)) {
      return false;
    } else {
      return true;
    }
  }

  validatorDate(input: Date, count: number) {
    const date = new Date();

    const system = new Date();
    system.setDate(date.getDate() + count);

    if (system > input) {
      return false;
    }
    return true;
  }

  conversionDate(inputDataPicker: Date, validationDate: string) {
    const date = new Date(this.changeFormatDate(validationDate));
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    inputDataPicker.setDate(inputDataPicker.getDate() + 1);
    return day === inputDataPicker.getDay() && month === inputDataPicker.getMonth() && year === inputDataPicker.getFullYear();
  }

  changeFormatDate(value): string  {
    const date = value;
    const tmp = date.split('-');
    const newDate = tmp[1] + '-' + tmp[0] + '-' + tmp[2];
    return newDate;
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
