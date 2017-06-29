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
    .then( res => this.categories = res.json())
  }

  editCategory(categoryId){
    this.router.navigate(['/editCategory',{id: categoryId}]);
  }

  deleteCategory(category){
    this.categoryService.deleteCategory(category)
    .then( res => {
      this.getCategories()
    }, err => alert("Error at delete"))
  }
}
