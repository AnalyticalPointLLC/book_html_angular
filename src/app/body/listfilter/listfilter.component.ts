import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LecturaService } from '../../core/service/lectura.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-listfilter',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './listfilter.component.html',
  styleUrl: './listfilter.component.css',
})
export class ListfilterComponent {
  public dtltipo: string = '';
  constructor(
    private lecturaService: LecturaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.dtltipo = params['tipo'];
    });
  }
}
