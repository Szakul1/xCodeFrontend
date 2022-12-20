import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { SortRequest } from 'src/app/interfaces/sort-request';
import { NumbersService } from 'src/app/services/numbers.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  displayNumbers: string = '';
  inputNumbers: string = '';
  order: Order = Order.ASC;

  constructor(private numbersService: NumbersService) { }

  ngOnInit(): void {
  }

  sortNumbers() {
    let sortRequest: SortRequest = {
      numbers: this.inputNumbers.trim().split(/\s+/).map(n => Number(n)),
      order: this.order
    };

    return this.numbersService.sortNumbers(sortRequest).subscribe({
      next: numberReponse => this.displayNumbers = numberReponse.numbers.join(', '),
      error: error => console.log(error)
      })
  }

  selectAsc() {
    this.order = Order.ASC;
  }

  selectDesc() {
    this.order = Order.DESC;
  }

  isAsc() {
    return this.order === Order.ASC;
  }

  isDesc() {
    return this.order === Order.DESC;
  }
    
}
