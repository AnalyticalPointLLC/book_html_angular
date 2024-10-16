import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LecturaService } from '../core/service/lectura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  showMore: boolean = false; // Controla si se muestran más de 4 productos

  constructor(
    private LecturaService: LecturaService,
    private routeres: Router
  ) {}

  ngOnInit() {
    this.LecturaService.getPromocionDiario().subscribe({
      next: (lst: any) => {
        this.products = lst;
      },
      error: (error: any) => {
        console.error('Error fetching products', error);
      },
      complete() {
        console.log('Product fetching completed');
      },
    });
  }

  toggleShowMore() {
    this.showMore = !this.showMore; // Alterna el estado de showMore
  }
}
