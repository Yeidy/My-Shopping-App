import { Component, EventEmitter, Output } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
@Output() featureSelected = new EventEmitter<string>();


/* coloco dentro de metodo lo que se espera recibir en este caso es un string */
    onSelect(feature: string){
        this.featureSelected.emit(feature);
        /* utilizamos la propiedad para sostener o manipular el evento, dentro del emit se encuentra
        "feature" que representa la data que recibe el metodo en el html cuando presiona el click que puede ser 
        'recipe' o 'shopping' */
    }



}