import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

@Input() recipe: Recipe;
 
@Output() recipeSelected = new EventEmitter<void>();
/* recipeSelected es la propiedad a la que se le asigna el evento para luego comunicarselo al padre,
 en este caso como es solo click y no recibe informacion se coloca como void */

  constructor() { }

  ngOnInit() {
  }

  onSelected($event){
    this.recipeSelected.emit();
  }

}
