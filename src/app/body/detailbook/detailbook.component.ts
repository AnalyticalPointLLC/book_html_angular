import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LecturaService } from '../../core/service/lectura.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detailbook',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './detailbook.component.html',
  styleUrl: './detailbook.component.css',
})
export class DetailbookComponent {
  public lstPromocion: any[] = [];

  public dtltitulo: string = '';
  public dtldescripcion: string = '';
  public dtlprecio: string = '';
  public dtlsku: string = '';
  public dtltags: string = '';
  public dtlpagina: string = '';
  public dtlpais: string = '';
  public dtlfecha: string = '';
  public dtlalto: string = '';
  public dtlancho: string = '';
  public dtlidioma: string = '';
  public dtlpeso: string = '';
  public dtlEditor: string = '';
  public dtlformato: string = '';
  public dtlimagen: string = '';
  public dtlid: string = '';
  public dtautor: string = '';

  constructor(
    private lecturaService: LecturaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.limpiarInfo();
    this.route.params.subscribe((params) => {
      this.dtlid = params['id']; // Access th
      this.voidListarPromoall();
    });
  }

  voidListarPromoall() {
    this.lecturaService.getbmgbookid(this.dtlid).subscribe({
      next: (lst: any) => {
        window.scrollTo(0, 0);
        this.dtltitulo = lst.titulo;
        this.dtldescripcion = lst.resumen;
        this.dtlprecio = lst.pvp;
        this.dtlsku = lst.codigo_bmg;
        this.dtltags = lst.canal_venta;
        this.dtlpagina = lst.paginas;
        this.dtlpais = lst.moneda;
        this.dtlfecha = lst.fecha_publicacion;
        this.dtlalto = lst.alto;
        this.dtlancho = lst.ancho;
        this.dtlidioma = lst.idioma_edicion;
        this.dtlpeso = lst.peso;
        this.dtlEditor = lst.editor;
        this.dtlformato = lst.formato;
        this.dtlimagen = lst.imagen_tapa;
        this.dtautor = lst.autor;
      },
    });
  }
  limpiarInfo() {
    this.dtltitulo = '';
    this.dtldescripcion = '';
    this.dtlprecio = '';
    this.dtlsku = '';
    this.dtltags = '';
    this.dtlpagina = '';
    this.dtlpais = '';
    this.dtlfecha = '';
    this.dtlalto = '';
    this.dtlancho = '';
    this.dtlidioma = '';
    this.dtlpeso = '';
    this.dtlEditor = '';
    this.dtlformato = '';
    this.dtlimagen = '';
    this.dtautor = '';
  }
}