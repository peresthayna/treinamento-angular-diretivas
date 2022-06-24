import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver()//escutando evento
  {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave()//escutando evento
  {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string; 
  //binding/associar uma classe ou atributo do html para uma variavel

  /** outra forma
   @HostBinding('style.backgroundColor') get setColor()
   {
    código extra caso precise modificar/manipular essa variável antes de setar a cor
    return this.backgroundColor;
   } 
  */

  constructor(
    //private _elementRef: ElementRef, private _renderer: Renderer2
    ) { }

}
