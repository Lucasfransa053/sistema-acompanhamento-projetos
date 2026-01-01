import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  imports: [],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css'
})
export class UiButtonComponent {
  @Input() label = '';
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled = false;
}
