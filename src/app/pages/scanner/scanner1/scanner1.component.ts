import { Component, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/scanner.service';
import { ImageService } from 'src/app/shared/image.service';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-scanner1',
  templateUrl: './scanner1.component.html',
  styleUrls: ['./scanner1.component.scss'],
})
export class Scanner1Component {
  savedResult: string = '';


  constructor(
    private http: HttpClient,
    private router: Router,
    private productService: ProductService,
    private imageService: ImageService
  ) { }

  testing(): void{
    this.savedResult = "4388844020870";
    this.makeApiRequest();
  }
  scanRequest(result: string) {
    if (this.savedResult !== result) {
      this.savedResult = result;

      this.captureScreenshot();
      this.makeApiRequest();
    }
  }

  manualRequest(): void{
    this.imageService.capturedImage = undefined;
    this.makeApiRequest();
  }
  makeApiRequest(): void {
    if(this.savedResult !== undefined && this.isBarcodeValid(this.savedResult) === false){
      return;
    }

    const url = `http://localhost:3000/api?ean=${this.savedResult}`;

    this.http.get(url, {responseType: 'text' }).subscribe(
      {
        next: (data: string) => {
          this.productService.products = this.productService.parseResponse(data);

          if(this.productService.products[0]){
            this.router.navigate(['/scanner/info']);
          }
          else{
            this.savedResult = 'NO PRODUCT FOUND';
          }
        },
        error: (err: any) => {
          console.error(err);
        }
      }
    )
  }

  public captureScreenshot(): void {
    const element = document.getElementById('scanner');
  
    html2canvas(element).then((canvas) => {
      this.imageService.capturedImage = canvas.toDataURL('image/png');
    });
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