import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LecturaService } from '../../core/service/lectura.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Categoria {
  codigo_ibic: string;
  nombre_clasificacion: string;
}

@Component({
  selector: 'app-listfilter',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './listfilter.component.html',
  styleUrl: './listfilter.component.css',
})
export class ListfilterComponent implements OnInit {
  public dtltipo: string = '';
  public lstProducto: any[] = [];
  public txtcatidioma: string = 'Español';
  public txtsearchtitulo: string = '';
  public nombreCategoria: string = '';
  public categorias: Categoria[] = [];

  constructor(
    private lecturaService: LecturaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {



      this.categorias = [
        { codigo_ibic: 'A', nombre_clasificacion: 'Las artes' },
        { codigo_ibic: 'B', nombre_clasificacion: 'Biografía e historias reales' },
        { codigo_ibic: 'C', nombre_clasificacion: 'Lenguaje' },
        { codigo_ibic: 'D', nombre_clasificacion: 'Literatura y estudios literarios' },
        { codigo_ibic: 'E', nombre_clasificacion: 'Enseñanza de la lengua inglesa' },
        { codigo_ibic: 'F', nombre_clasificacion: 'Ficción y temas afines' },
        { codigo_ibic: 'G', nombre_clasificacion: 'Consulta, información y temas interdisciplinarios' },
        { codigo_ibic: 'H', nombre_clasificacion: 'Humanidades' },
        { codigo_ibic: 'J', nombre_clasificacion: 'Sociedad y ciencias sociales' },
        { codigo_ibic: 'K', nombre_clasificacion: 'Economía, finanzas, empresa y gestión' },
        { codigo_ibic: 'L', nombre_clasificacion: 'Derecho' },
        { codigo_ibic: 'M', nombre_clasificacion: 'Medicina' },
        { codigo_ibic: 'P', nombre_clasificacion: 'Matemáticas y ciencia' },
        { codigo_ibic: 'R', nombre_clasificacion: 'Ciencias de la tierra, geografía, medioambiente, planificación' },
        { codigo_ibic: 'T', nombre_clasificacion: 'Tecnología, ingeniería, agricultura' },
        { codigo_ibic: 'U', nombre_clasificacion: 'Computación e informática' },
        { codigo_ibic: 'V', nombre_clasificacion: 'Salud y desarrollo personal' },
        { codigo_ibic: 'W', nombre_clasificacion: 'Estilo de vida, deporte y ocio' },
        { codigo_ibic: 'Y', nombre_clasificacion: 'Infantiles, juveniles y didácticos' }
      ];



    this.route.params.subscribe((params) => {
      this.dtltipo = params['ibic'];
      this.nombreCategoria = params['nombreCategoria']; // Obtener el nombre de la categoría

      if (this.dtltipo === 'NuevosTitulos') {
        this.loadNuevosTitulos();
      } else {
        this.VoidListadoProducto();
      }

      this.VoidListadoProducto();
      window.scrollTo(0, 0);
    });
  }

  loadNuevosTitulos() {
    this.lecturaService.getPromocionDiario().subscribe({
      next: (lst: any) => {
        this.lstProducto = lst;
      },
      error: (error: any) => {
        console.error('Error fetching nuevos títulos', error);
      }
    });
  }

  VoidListadoProducto() {
    this.lecturaService
      .getPrefixFilterClasificacionIdioma(this.txtcatidioma, this.dtltipo)
      .subscribe({
        next: (dtl: any) => {
          console.log(dtl);
          this.lstProducto = dtl;
        },
        error: () => {},
      });
  }

  onCategoriaClick(categoria: Categoria) {
    this.dtltipo = categoria.codigo_ibic;
    this.nombreCategoria = categoria.nombre_clasificacion;
    this.VoidListadoProducto();
  }

  busquedaTitulo() {
    this.lecturaService
      .getSearchtituloidioma(this.txtcatidioma, this.txtsearchtitulo)
      .subscribe({
        next: (dtl: any) => {
          this.lstProducto = dtl;
        },
        error: () => {},
      });
  }
}
