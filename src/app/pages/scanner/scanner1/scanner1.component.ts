import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-scanner1',
  templateUrl: './scanner1.component.html',
  styleUrls: ['./scanner1.component.scss'],
  
})

export class Scanner1Component {
  constructor(private http: HttpClient) { }


  savedResult: string = "0000000000000";

  scanSuccessHandler(result: string){
    if(this.savedResult != result)
    {
      this.savedResult = result;
    
      this.makeApiRequest(this.savedResult)
      console.log(this.savedResult);
    }
  }

  makeApiRequest(barcode: string): void {
    const url = `http://opengtindb.org/?ean=${barcode}&cmd=query&queryid=400000000`;
  
    this.http.get(url).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(() => error);
      })
    ).subscribe((response: any) => {
      console.log(response);
    });
  }
  
}