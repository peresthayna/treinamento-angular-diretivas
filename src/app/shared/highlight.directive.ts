import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { withLatestFrom } from 'rxjs';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver()
  {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string; 

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow'; //mesmo nome da diretiva

  constructor() { }

  ngOnInit()
  {
    this.backgroundColor = this.defaultColor;
  }

}
