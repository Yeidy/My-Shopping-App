import{Directive, HostListener, HostBinding, ElementRef, Renderer2} from '@angular/core';


@Directive({
    selector: '[appDropdown]'
})

/* Lo primero que me interesa es escuchar el click que abrira el dropdown, para eso uso un HostListener, 
creo el metodo y la variabel para comparar.
Uso HostBinding para atar el status de la variable  a un elemento en este caso a la clase de este elemento */
export class DropdownDirective{

    constructor (private el:ElementRef, private renderer: Renderer2){}

    @HostBinding('class.open') isOpen=false;


    @HostListener('click')toggleOpen(){
        this.isOpen = !this.isOpen;
        let part = this.el.nativeElement.querySelector('.dropdown-menu');
        if(this.isOpen){
            this.renderer.addClass(part, 'show');
        } 
        else{
            this.renderer.removeClass( part, 'show')
        }
    }


}