import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LecturaService } from '../core/service/lectura.service';
import { Router } from '@angular/router';

interface Category {
  codigo_ibic: string;
  nombre_clasificacion: string;
  productos: any[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  categories: Category[] = [
    { codigo_ibic: "A", nombre_clasificacion: "Las artes", productos: [] },
    { codigo_ibic: "B", nombre_clasificacion: "Biografía e historias reales", productos: [] },
    { codigo_ibic: "C", nombre_clasificacion: "Lenguaje", productos: [] },
    { codigo_ibic: "D", nombre_clasificacion: "Literatura y estudios literarios", productos: [] },
    { codigo_ibic: "E", nombre_clasificacion: "Enseñanza de la lengua inglesa ", productos: [] },
    { codigo_ibic: "F", nombre_clasificacion: "Ficción y temas afines", productos: [] },
    { codigo_ibic: "G", nombre_clasificacion: "Consulta, información y temas interdisciplinarios", productos: [] },
    { codigo_ibic: "H", nombre_clasificacion: "Humanidades", productos: [] },
    { codigo_ibic: "J", nombre_clasificacion: "Sociedad y ciencias sociales", productos: [] },
    { codigo_ibic: "K", nombre_clasificacion: "Economía, finanzas, empresa y gestión", productos: [] },
    { codigo_ibic: "L", nombre_clasificacion: "Derecho", productos: [] },
    { codigo_ibic: "M", nombre_clasificacion: "Medicina", productos: [] },
    { codigo_ibic: "P", nombre_clasificacion: "Matemáticas y ciencia", productos: [] },
    { codigo_ibic: "R", nombre_clasificacion: "Ciencias de la tierra, geografía, medioambiente, planificación", productos: [] },
    { codigo_ibic: "T", nombre_clasificacion: "Tecnología, ingeniería, agricultura", productos: [] },
    { codigo_ibic: "U", nombre_clasificacion: "Computación e informática", productos: [] },
    { codigo_ibic: "V", nombre_clasificacion: "Salud y desarrollo personal", productos: [] },
    { codigo_ibic: "W", nombre_clasificacion: "Estilo de vida, deporte y ocio", productos: [] },
    { codigo_ibic: "Y", nombre_clasificacion: "Infantiles, juveniles y didácticos", productos: [] }
  ];

  txtcatidioma: string = 'Español';

  products: any[] = [];
  showMore: boolean = false; // Controla si se muestran más de 4 productos

  constructor(
    private lecturaService: LecturaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.lecturaService.getPromocionDiario().subscribe({
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

    this.loadProductsForCategories();

  }

  loadProductsForCategories() {
    this.categories.forEach(category => {
      this.lecturaService.getPrefixFilterClasificacionIdioma(this.txtcatidioma, category.codigo_ibic)
        .subscribe({
          next: (response: any) => {
            console.log(`Data for ${category.nombre_clasificacion}:`, response);
            if (Array.isArray(response)) {
              category.productos = response.slice(0, 5); // Muestra los primeros 5 productos
            } else {
              console.warn(`Unexpected response structure for category ${category.codigo_ibic}`);
              category.productos = []; // Manejando el caso donde la estructura no es la esperada
            }
          },
          error: (error: any) => {
            console.error(`Error fetching products for category ${category.codigo_ibic}`, error);
          }
        });
    });
  }




  toggleShowMore() {
    this.showMore = !this.showMore; // Alterna el estado de showMore
  }
}
