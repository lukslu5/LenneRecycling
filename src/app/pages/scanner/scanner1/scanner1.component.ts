import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/scanner.service';

@Component({
  selector: 'app-scanner1',
  templateUrl: './scanner1.component.html',
  styleUrls: ['./scanner1.component.scss'],
})
export class Scanner1Component {
  @Output() imageCaptured: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('videoElement', { static: false }) videoElement: ElementRef;
  //WIP
  savedResult: string;


  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedService: ProductService
  ) { }

  testing(): void{
    this.savedResult = "4388844020870"
    this.makeApiRequest();
  }

  scanSuccessHandler(result: string) {
    if (this.savedResult !== result) {
      this.savedResult = result;

      const image = this.captureImage();
      this.imageCaptured.emit(image);

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
  //WIP
  captureImage(): string {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
  
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  
    // Draw the current frame from the video onto the canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    // Get the image data from the canvas as a base64 encoded string
    return canvas.toDataURL('image/png');
  
  }
}
