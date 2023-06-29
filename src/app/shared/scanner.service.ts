import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private packTypes = {
      1: "Plastikverpackung",
      2: "Verbundmaterialverpackung",
      4: "Papier/Pappeverpackung",
      8: "Glas/Keramik/Tonverpackung",
      16: "Metallverpackung",
      32: "unverpackt",
      64: "plastikfreie Verpackung",
      128: "übertrieben stark verpackt",
      256: "angemessen sparsam verpackt",
      512: "Pfandsystem / Mehrwegverpackung"
  };
    
  public getPackaging(value: number): string[] {
    const selectedPackTypes: string[] = [];

    this.getPowerOfNumbers(value).forEach((packType) => {
      if (this.packTypes[packType]) {
        selectedPackTypes.push(this.packTypes[packType]);
      }
    });
  
    return selectedPackTypes;
  }
  
  public getPowerOfNumbers(sum: number): number[] {
    const result: number[] = [];
  
    let number = 1;
  
    for(let exp = 0; sum >= number; exp++){
      number = Math.pow(2,exp);
      if ((sum & number) === number) {
        result.push(number);
      }
    }
    return result;
  }
  products: Product[] = [];

  public parseResponse(data: string): Product[] {
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
