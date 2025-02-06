import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {
  indice: number = 13;
  soma: number = 0;
  k: number = 0;

  calculateSum() {
    while (this.k < this.indice) {
      this.k += 1;
      this.soma += this.k;
    }
  }
}



