import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  public isShow : boolean= true;
  public productList : any [] = []
  public filterList : any [] = []
  public minNumber : number | null = null
  public MaxNumber : number | null = null
  public category : string = ''

  constructor ( public productService:ProductService ){

  }
  ngOnInit(): void {
    this.Show()
    this.loadProduct()
    
  }

   loadProduct(): void{
     this.productService.getProduct().subscribe(
      product => {
        this.productList = product
        this.filterList= [...this.productList]
        console.log(this.productList);
        
      }
     )
   }   

   Show():void{
      this.isShow=!this.isShow
   }
   setCategory(category:string){
  this.category=category
   }
   applyFilters(): void{
  let filteredProduct =this.productList

  if(this.category){
  filteredProduct=filteredProduct.filter(item  => item.category ===this.category )
  }
  if(this.minNumber !== null && this.MaxNumber !==null){
    filteredProduct=filteredProduct.filter(item=> item.price >= this.minNumber! && item.price <= this.MaxNumber! )
      
    }
    this.filterList=filteredProduct
  }
   }

   
  



