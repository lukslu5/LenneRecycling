import { Component } from '@angular/core';
import { BrowserMultiFormatReader } from '@zxing/library';

@Component({
  selector: 'app-scanner1',
  templateUrl: './scanner1.component.html',
  styleUrls: ['./scanner1.component.scss']
})

//Quagga is outdated and this kinda works? Continue this with existing code on Monday!

export class Scanner1Component {
  ngOnInit() {
    const videoElement = document.getElementById('video') as HTMLVideoElement;
    const outputElement = document.getElementById('output') as HTMLDivElement;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Request access to the webcam
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          // Display the webcam video stream in the video element
          videoElement.srcObject = stream;

          // Initialize the barcode reader
          const codeReader = new BrowserMultiFormatReader();

          // Start scanning for barcodes
          codeReader.decodeFromVideoElement(videoElement)
            .then(results => {
              // Barcode recognized, update the output element with the result
              const result = results[0];
              if (result) {
                outputElement.innerText = result.getText();
              }
            })
            .catch(error => {
              // Handle errors
              console.error(error);
            });
        })
        .catch(error => {
          console.error('Error accessing the webcam:', error);
        });
    } else {
      console.error('getUserMedia is not supported');
    }
  }
}