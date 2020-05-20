'use strict';

class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev, 
        infinity = false,
        position = 0, 
        slidesToShow = 4,
        responsive = []
    }){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100/this.slidesToShow)
        };
        this.responsive = responsive;

    }
    init(){
       this.addGloClass();
       this.addStyle();

       if(this.prev && this.next){
           this.controlSlider();
       }else{
           this.addArrow();
           this.controlSlider();
       }
       if(this.responsive){
           this.responsInit();
       }
       
    }

    addGloClass(){
        this.main.classList.add('glo-slider_mine');
        this.wrap.classList.add('glo-slider_wrap');
        for( const item of this.slides){
            item.classList.add('glo-slider_item');
        }
    }

    addStyle(){
        let style = document.getElementById('sliderCorusel-style');
        if(!style){
            style = document.createElement('style');
            style.id = 'sliderCorusel-style';
        };
        
        style.textContent = `
            .glo-slider{
                overflow: hidden !important;
            }
            .glo-slider_wrap{
                display: flex !important;
                transition: transform 0.5s !important;
            }
            .glo-slider_item{
                display: flex !important;
                align-items: center;
                justify-content: center;
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
            }
        `;
        document.head.appendChild(style);

    }

    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider(){
      
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            console.log(this.options.position);
            if(this.options.position < 0){
                this.options.position = this.slides.length - this.slidesToShow;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide }%)`;
        }
        
    }

    nextSlider(){
        
        if(this.options.infinity || this.options.position < this.slides.length - this.slidesToShow){
            ++this.options.position;
            console.log(this.options.position);
            if( this.options.position > this.slides.length - this.slidesToShow){
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide }%)`;
        }   
          
    }

    addArrow(){
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.classList.add('glo-slider_prev');
        this.next.classList.add('glo-slider_next');

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);

        const style = document.createElement('style');
        
        style.textContent = `
          .glo-slider_prev,
          .glo-slider_next{
              margin: 0 10px;
              border: 20px solid transparent;
              background: transparent;
          }
            .glo-slider_next{
                border-left-color: #19b5fe;
            }
            .glo-slider_prev{
                border-right-color: #19b5fe;
            }
            .glo-slider_prev:hover,
            .glo-slider_next:hover,
            .glo-slider_prev:focus,
            .glo-slider_next:focus{
                background: transparent;
                outline: transparent;
            }
        `;

             document.head.appendChild(style);
    }
    responsInit(){
        const slidesToShowDefault = this.slidesToShow;
        const allRespons = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allRespons);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
           if(widthWindow < maxResponse){
               for (let i = 0; i < allRespons.length; i++){
                   if(widthWindow < allRespons[i]){
                    this.slidesToShow = this.responsive[i].slideToShow;
                    this.options.widthSlide = Math.floor(100/this.slidesToShow);
                    this.addStyle();
                   }
               }
           }
        }
       
        checkResponse();
    }

} 

