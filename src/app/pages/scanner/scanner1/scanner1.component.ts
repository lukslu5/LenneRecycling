import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface Product {
  error: string;
  asin: string;
  name: string;
  detailname: string;
  vendor: string;
  maincat: string;
  subcat: string;
  maincatnum: string;
  subcatnum: string;
  contents: string;
  pack: string;
  origin: string;
  descr: string;
  name_en: string;
  detailname_en: string;
  descr_en: string;
  validated: string;
}

@Component({
  selector: 'app-scanner1',
  templateUrl: './scanner1.component.html',
  styleUrls: ['./scanner1.component.scss'],
})
export class Scanner1Component implements OnInit {
  savedResult: string = "0000000000000";
  products: Product[];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.makeApiRequest('4011094102033');
  }

  scanSuccessHandler(result: string) {
    if (this.savedResult !== result) {
      this.savedResult = result;
      this.makeApiRequest(this.savedResult);
      console.log(this.savedResult);
    }
  }

  makeApiRequest(barcode: string): void {
    const url = `http://localhost:3000/api?ean=${barcode}`;

    this.http.get(url, { responseType: 'text' }).subscribe(
      (data: string) => {
        // Parse the plain text response manually
        this.products = this.parseResponse(data);
        console.log(this.products);

        // Pass the products array to Scanner2Component
        this.router.navigate(['/scanner/info'], { queryParams: { products: JSON.stringify(this.products) } });

      },
      (error) => {
        console.error(error);
      }
    );
  }

  private parseResponse(data: string): Product[] {
    const products: Product[] = [];
    const lines = data.split('---');

    for (const line of lines) {
      const entries = line.split('\n');
      const product: Partial<Product> = {};

      let isErrorObject = false;

      for (const entry of entries) {
        const [key, value] = entry.split('=');
        const trimmedKey = key ? key.trim().toLowerCase() : '';
        const trimmedValue = value ? value.trim() : '';

        if (trimmedKey && trimmedValue) {
          if (trimmedKey === 'error') {
            isErrorObject = true;
            break;
          }
          product[trimmedKey as keyof Product] = trimmedValue;
        }
      }

      if (Object.keys(product).length > 0 && !isErrorObject) {
        products.push(product as Product);
      }
    }

    return products;
  }
}
