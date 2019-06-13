import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent<T> {
  @Input() items: T[];
  @Input() template: TemplateRef<T>;
}

