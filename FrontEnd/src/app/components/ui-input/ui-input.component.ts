import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ui-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ui-input.component.html',
  styleUrl: './ui-input.component.css'
})
export class UiInputComponent {

  @Input() label = '';
  @Input() type = 'text';

  @Input() model: any;
  @Output() modelChange = new EventEmitter<any>();

  onInputChange(value: any) {
    this.modelChange.emit(value);
  }
}
