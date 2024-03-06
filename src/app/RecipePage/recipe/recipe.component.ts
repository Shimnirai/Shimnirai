import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  public RecipeData: any;

  constructor(private service: RecipeService){
    this.LoadRecipe();
  }
  private LoadRecipe () {
    this.service.LoadRecipe().subscribe((data) => {
      this.RecipeData = data.recipes;
    });
  }

}
