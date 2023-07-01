import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/shared/scanner.service';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/shared/image.service';


@Component({
  selector: 'app-scanner2',
  templateUrl: './scanner2.component.html',
  styleUrls: ['./scanner2.component.scss'],
})
export class Scanner2Component implements OnInit {
  capturedImage: any;

  products: Product[];
  productPacks: any[] = [];         //productPacks ist die Verpackung selbst
  productInstructions: any[] = [];  //productInstructions ist die Anweisung wie es zu entsorgen ist
  productExtras: any[] = [];        //productExtras sind zusätzliche Informationen

  constructor(
    private router: Router,
    private productService: ProductService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    if(!this.productService.products[0]){
      this.router.navigate(['/scanner/scan']);
    }
    this.products = this.productService.products;
    this.capturedImage = this.imageService.capturedImage;

    for(let i = 0;i < this.products.length;i++){
      this.productPacks[i] = this.productService.getPackaging(Number(this.products[i].pack));

      const productPackagingInfo = this.makePackagingInfo(Number(this.products[i].pack));
      this.productInstructions[i] = productPackagingInfo[0]
      this.productExtras[i] = productPackagingInfo[1]
    }
  }

  makePackagingInfo(pack: number): [string[],string[]] {
    const packagings = this.productService.getPowerOfNumbers(pack);
    console.log(pack);
    console.log(packagings);

    const packagingInstructions: string[] = [];
    const packagingExtras: string[] = [];

    if (packagings[0]) {
      for (let k = 0; k < packagings.length; k++) {
  
        switch (packagings[k]) {
          case 1:
            packagingInstructions.push("Entsorge den Müll in die gelbe Tonne.");
            break;
          case 2:
            packagingInstructions.push("Entsorge den Müll in die graue Tonne,dem Recyclinghof oder im Sperrmüll.");
            break;
          case 4:
            packagingInstructions.push("Entsorge den Müll in die grüne Tonne.");
            break;
          case 8:
            packagingInstructions.push("Entsorge den Müll in einen Glascontainer.");
            break;
          case 16:
            packagingInstructions.push("Entsorge den Müll in die auf dem Wertstoffhof oder im Sperrmüll. Kleine Mengen können auch in die graue Tonne.");
            break;
          case 32:
            packagingExtras.push("Es ist keine Verpackung vorhanden die entsorgt werden muss.");
            break;
          case 64:
            packagingExtras.push("Wählen Sie weiterhin Plastikfreie Produkte");
            break;
          case 128:
            packagingExtras.push("Trenne die Verpackungsmaterialien und entsorge sie entsprechend.");
            break;
          case 256:
            packagingExtras.push("Trenne die Verpackungsmaterialien und entsorge sie entsprechend.");
            break;
          case 512:
            packagingExtras.push("Stellen Sie sicher, dass Sie Flaschen und Behälter mit Pfand zurückgeben.");
            break;
        }
      }
    } else {
      packagingExtras.push("Es sind keine Verpackungsinformationen vorhanden");
    }
  
    return [packagingInstructions, packagingExtras];
  }
}
