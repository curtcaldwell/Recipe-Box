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
    new Recipe('Spaghetti', 'Pasta, Marinara, Cheese', 'Boil water, add pasta, add sauce'),
    new Recipe('Cheeseburger', 'Bun, Burger, Cheese', 'Grill burger 4 minutes each side, Add Cheese, Serve on bun'),
    new Recipe('JegerBomb', 'Jeger, Red Bull', 'Drop 1 oz shot of Jeger into 4 oz cup of Red Bull')
  ];
}
