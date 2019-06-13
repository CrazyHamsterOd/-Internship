import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appLineThrough]'
})
export class LineThroughDirective implements OnChanges{
  @Input() done: boolean;

  constructor(public element: ElementRef, private render: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.render.setStyle(this.element.nativeElement,
      'textDecoration',
      changes["done"].currentValue ? 'line-through' : 'none');
  }

}
