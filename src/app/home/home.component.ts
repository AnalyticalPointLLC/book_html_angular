import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  showMore: boolean = false; // Controla si se muestran más de 4 productos

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log('Products:', this.products);
      },
      (error) => {
        console.error('Error fetching products', error);
      },
      () => {
        console.log('Product fetching completed');
      }
    );
  }

  toggleShowMore() {
    this.showMore = !this.showMore; // Alterna el estado de showMore
  }
}
