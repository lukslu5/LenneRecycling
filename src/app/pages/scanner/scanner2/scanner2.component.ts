import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../scanner1/scanner1.component';

@Component({
  selector: 'app-scanner2',
  templateUrl: './scanner2.component.html',
  styleUrls: ['./scanner2.component.scss'],
})
export class Scanner2Component implements OnInit {
  products: Product[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.products) {
        this.products = JSON.parse(params.products);
      } else {
        // Handle case when products are not available
      }
    });
  }
}