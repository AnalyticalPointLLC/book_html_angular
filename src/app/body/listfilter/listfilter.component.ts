import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LecturaService } from '../../core/service/lectura.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  constructor(
    private lecturaService: LecturaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.dtltipo = params['ibic'];
      this.VoidListadoProducto();
      window.scrollTo(0, 0);
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
