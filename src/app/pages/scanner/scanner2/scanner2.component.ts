import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/shared/scanner.service';

@Component({
  selector: 'app-scanner2',
  templateUrl: './scanner2.component.html',
  styleUrls: ['./scanner2.component.scss'],
})
export class Scanner2Component implements OnInit {
  @Input() capturedImage: string;

  products: Product[];
  productPacks: any[] = [];

  constructor(
    private sharedService: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.sharedService.products;

    for(let i = 0;i < this.products.length;i++)
    {
      this.productPacks[i] = this.sharedService.getPackaging(Number(this.products[i].pack));
    }
    console.log(this.products);
    console.log(this.productPacks);
  }
}
