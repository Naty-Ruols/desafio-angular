import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe FormsModule para o ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';
  @Output() searchSubmitted = new EventEmitter<string>();

  search() {
    this.searchSubmitted.emit(this.searchTerm);
  }
}
