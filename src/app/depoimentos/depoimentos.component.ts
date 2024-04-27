import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import $ from 'jquery';



@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class DepoimentosComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      $('.testimonial-title').on('click', function() {
        $(this).siblings('.testimonial-content').slideToggle();
      });
    }
  }
}
