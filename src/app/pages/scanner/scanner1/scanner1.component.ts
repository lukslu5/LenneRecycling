import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/scanner.service';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-scanner1',
  templateUrl: './scanner1.component.html',
  styleUrls: ['./scanner1.component.scss'],
})
export class Scanner1Component implements OnInit {
  savedResult: string = "0000000000000";

  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedService: ProductService
  ) { }

  ngOnInit(): void {
    this.makeApiRequest('9006900014858');
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

    this.http.get(url, {responseType: 'text' }).subscribe(
      {
        next: (data: string) => {
          const products = this.sharedService.parseResponse(data);

          // Pass the products array to the shared service
          this.sharedService.products = products;

          // Navigate to Scanner2Component
          this.router.navigate(['/scanner/info']);
        },
        error: (err: any) => {
          console.error(err);
        }
      }
    )
  }
}
