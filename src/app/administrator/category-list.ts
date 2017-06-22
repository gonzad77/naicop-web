import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category-service';

@Component({
  selector: '',
  styleUrls: ['./category-list.scss'],
  templateUrl: './category-list.html'
})

export class CategoryListComponent {

  categories: Array<any>;

  constructor(
    public router: Router,
    public categoryService: CategoryService
  ){
  }

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories()
    .then( res => console.log(res))
  }

  editCategory(categoryId){
    this.router.navigate(['/editCategory',{id: categoryId}]);
  }

  deleteCategory(categoryId){
    this.categoryService.deleteCategory(categoryId)
    .then( res => this.getCategories())
  }
}
