import { Component } from '@angular/core';
import { JsonPageService } from '../json-page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-json-page',
  templateUrl: './json-page.component.html',
  styleUrl: './json-page.component.css'
})
export class JsonPageComponent {
  Recipes: any;




constructor(private service: JsonPageService, private route: ActivatedRoute) {
  console.log("Constructor");
}

ngOnInit(): void {
  console.log("ngOnInit");
  let search: string = "";
  this.route.queryParams.subscribe(params => {
    search = params['search'];
  });
  this.LoadRecipesInfo(search);
}

public LoadRecipesInfo(search: string){
  this.service.LoadRecipe().subscribe((data) => {
    this.Recipes = data.recipes;
    if(search!=""){
      this.Recipes= this.Recipes.filter((res: {name: string; }) => {
        return res.name.toLowerCase().match(search.toLowerCase());
      });

    }
  });
}



}
