import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent {
  numberInformed: number = 21;
  resultFibonacci: string = '';

  calculateFibonacci() {
    let a = 0, b = 1, fibonacci = [a, b];
    while (b < this.numberInformed) {
      let temp = a;
      a = b;
      b = temp + b;
      fibonacci.push(b);
    }

    if (fibonacci.includes(this.numberInformed)) {
      this.resultFibonacci = `O número ${this.numberInformed} pertence à sequência de Fibonacci.`;
    } else {
      this.resultFibonacci = `O número ${this.numberInformed} NÃO pertence à sequência de Fibonacci.`;
    }
    console.log( this.numberInformed)
  }
}
