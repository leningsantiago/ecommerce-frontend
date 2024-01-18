import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var $: any; // Declara la variable $ para que TypeScript la reconozca

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements AfterViewInit {
  ngAfterViewInit(): void {
      // banner slider
      $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="las la-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="las la-angle-right"></i></button>',
        responsive: [{
            breakpoint: 1300,
            settings: {
                arrows: false,
            }
        }]
    });

    // Hero slider
    $('.hero_slider_active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    // single product view slider
    $('.product_view_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product_viewslid_nav',
        infinite: false
    });

    // single product view slider nav
    $('.product_viewslid_nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="las la-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="las la-angle-right"></i></button>',
        asNavFor: '.product_view_slider',
        focusOnSelect: true,
        centerMode: false,
        centerPadding: '0px',
        infinite: false,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        }]
    });

    // product slider
    $('.product_slider_2').slick({
        dots: false,
        arrows: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="las la-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="las la-angle-right"></i></button>',
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    arrows: false,
                }
            },{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    // team slider
    $('.team_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    arrows: false,
                }
            },{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    // brand slider
    $('.brand_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    arrows: false,
                }
            },{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ]
    });
  }

}
