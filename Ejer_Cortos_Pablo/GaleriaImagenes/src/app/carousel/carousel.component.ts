import {Component, ContentChildren, Input, AfterContentInit, QueryList} from '@angular/core';
import {CarouselItemComponent} from "../carousel-item/carousel-item.component";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterContentInit {

  @Input() delay: number;

  @ContentChildren(CarouselItemComponent) carouselItems : QueryList<CarouselItemComponent>;

  constructor() { }

  ngAfterContentInit() {
    // Obtener instancias a todos los CarouselItemComponent-s, que son Content-Projected de AppComponent.
    let carouselListItems: CarouselItemComponent[] = this.carouselItems.toArray();

    // Primero activar los carousel item's
    let activeCarouselItemIndex = 0;

    if (carouselListItems.length > 0) {
      carouselListItems[activeCarouselItemIndex].isActive = true;

      // Intervalo de inicio, que activa el siguiente CarouselItem con el retardo especificado.
      setInterval(function() {
        carouselListItems[activeCarouselItemIndex].isActive = false;

        activeCarouselItemIndex++;
        if (activeCarouselItemIndex >= carouselListItems.length) {
          activeCarouselItemIndex = 0;
        }
        carouselListItems[activeCarouselItemIndex].isActive = true;
      }, this.delay);
    }



  }

}