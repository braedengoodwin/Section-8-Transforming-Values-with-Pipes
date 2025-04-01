<<<<<<< HEAD
import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';
=======
import { Component } from '@angular/core';
>>>>>>> 6af973ca372f6774d8d9c4e843a4aa153a5f4a66

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
<<<<<<< HEAD
  imports: [DatePipe, DecimalPipe, TemperaturePipe, SortPipe],
=======
>>>>>>> 6af973ca372f6774d8d9c4e843a4aa153a5f4a66
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

<<<<<<< HEAD
  constructor() {
    this.historicTemperatures.sort((a, b) => (a > b ? 1 : -1));
  }

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
    // const newTemps = [...this.historicTemperatures];
    // newTemps[index] = 18;
    // this.historicTemperatures = newTemps;
=======
  onReset(index: number) {
    this.historicTemperatures[index] = 18;
>>>>>>> 6af973ca372f6774d8d9c4e843a4aa153a5f4a66
  }
}
