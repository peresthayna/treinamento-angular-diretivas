import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) 
  {
    //console.log(this.elementRef); para achar o caminho
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow'; evitar pois causa vulnerabilidade
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow'); //forma segura
  }

}
