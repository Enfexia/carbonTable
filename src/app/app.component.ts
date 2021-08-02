import { Component, OnInit } from '@angular/core';
import {
  TableHeaderItem,
  TableItem,
  TableModel,
  TableRowSize,
} from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.model.data = [
      [new TableItem({ data: 'Name 1' }), new TableItem({ data: 'qwer' })],
      [new TableItem({ data: 'Name 3' }), new TableItem({ data: 'zwer' })],
      [new TableItem({ data: 'Name 2' }), new TableItem({ data: 'swer' })],
      [new TableItem({ data: 'Name 4' }), new TableItem({ data: 'twer' })],
    ];
    this.model.header = [
      new TableHeaderItem({ data: 'Name' }),
      new TableHeaderItem({ data: 'Place' }),
    ];
  }
  title = 'tableTest';
  model = new TableModel();
  size: TableRowSize = 'md';
}
