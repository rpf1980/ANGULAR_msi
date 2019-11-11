import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  // Potenciaremos las img con un atributo que lo convertirá
  // en una imagen cambiante
  selector: 'img[ccRollover]'
})
export class DirectivasDirective {

  // Le ponemos el mimso nombre para usarlo entre corchetes
  @Input('ccRollover') config: any =  {
    intitial: 'imgNumberOne',
    over: 'imgNumberTwo'
  };

  // Esto hace:
  // Une una propiedad a un atributo del padre (template ==> src)
  @HostBinding('src') private imagePath: string;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    console.log('[H] ngOnInit');
    this.setInitialImage();
  }
 //Con este decorador indico a qué eventos de la imagen
 // quiero responder
  @HostListener('mouseover') onMouseOver() {
    this.setHoveredImage();
  }

  @HostListener('mouseout') onMouseOut() {
    this.setInitialImage();
  }

  private setHoveredImage() {
    this.imagePath = this.config.over;
  }

  private setInitialImage() {
    this.imagePath = this.config.initial;
  }

}
