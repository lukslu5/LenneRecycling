import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
export class Scanner1Component {
  savedResult: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedService: ProductService
  ) { }

  testing(): void{
    this.savedResult = "4011094102033"
    this.makeApiRequest();
  }

  scanSuccessHandler(result: string) {
    if (this.savedResult !== result) {
      this.savedResult = result;
      this.makeApiRequest();
    }
  }

  makeApiRequest(): void {
    if(this.isBarcodeValid(this.savedResult) === false){
      return;
    }

    const url = `http://localhost:3000/api?ean=${this.savedResult}`;

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

  isBarcodeValid(barcode: string): boolean {
    let sum = 0;
    const check = Number(barcode[barcode.length - 1]);
  
    for (let i = barcode.length - 2; i >= 0; i -= 2) {
      sum += (Number(barcode[i]) * 3);
    }
  
    for (let i = barcode.length - 3; i >= 0; i -= 2) {
      sum += Number(barcode[i]);
    }
  
    if ((sum + check) % 10 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
}
