import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent {
  @Input() checked = false;
  @Output() checkboxChange = new EventEmitter<boolean>();
}
