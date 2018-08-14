import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Pasta, Marinara, Cheese', 'Boil water, add pasta, add sauce', 1),
    new Recipe('Cheeseburger', 'Bun, Burger, Cheese', 'Grill burger 4 minutes each side, Add Cheese, Serve on bun', 3),
    new Recipe('JegerBomb', 'Jeger, Red Bull', 'Drop 1 oz shot of Jeger into 4 oz cup of Red Bull', 5)
  ];
  selectedRecipe = null;
  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }
  finishedEditing() {
    this.selectedRecipe = null;
  }
  priorityColor(currentRecipe){
    if (currentRecipe.rating === 1){
      return "bg-danger";
    } else if (currentRecipe.rating === 3) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

}
