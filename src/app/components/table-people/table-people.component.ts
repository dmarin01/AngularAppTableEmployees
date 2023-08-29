import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { People } from 'src/app/data/people.data';
import { Person } from 'src/app/models/people.model';

@Component({
  selector: 'app-table-people',
  templateUrl: './table-people.component.html',
  styleUrls: ['./table-people.component.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule],
})
export class TablePeopleComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'felichidad'];
  dataSource: Person[] = People;
}
