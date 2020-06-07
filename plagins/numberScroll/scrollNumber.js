'use strict';

class EnumNumber {
    constructor({
        value,
        input,
        listenBtn,
        count = 0, 
        step = 0,
        speed = 1
    })
    {
        this.totalValue = document.querySelector(value);
        this.totalInput = document.querySelector(input);
        this.totalBtn = document.querySelector(listenBtn);
        this.options = {
            count,
            step,
            speed
        }
    }
    init(){
        console.log('Привет');
        this.listenBtn(); 
        this.listenInput();
        this.listenChange();
    }

    counter(total){
        
        const timer = setInterval(() =>{

         if (total > this.options.count){
            if ((total - this.options.count) > 10000 ) {
                this.options.step = 1000;        
            } else if ((total - this.options.count) > 1000 ) {
                this.options.step = 100;        
            } else if ((total - this.options.count) > 100 ) {
                this.options.step = 10;        
            } else {
                this.options.step = 1;
            }
            this.options.count += this.options.step;
         }
         
         if (total < this.options.count){ 
            if ((this.options.count - total) > 10000 ) {
                this.options.step = 1000;        
            } else if ((this.options.count - total) > 1000 ) {
                this.options.step = 100;        
            } else if ((this.options.count - total) > 100 ) {
                this.options.step = 10;        
            } else {
                this.options.step = 1;
            }
            this.options.count -= this.options.step;
         }  

            if( total === this.options.count){ 
                this.options.count = total;
                clearInterval(timer);
            } 
            this.totalValue.textContent = this.options.count;  
        
        }, this.options.speed);

    };  
    
    listenBtn(){
        this.totalBtn.addEventListener('change', () =>{
            this.counter(Number(this.totalInput.value));
        })
    }
    // listenInput(){
    //     this.totalInput.addEventListener('input', () => {
    //         this.counter(Number(this.totalInput.value));
    //     })
    // }
    // listenChange(){
    //     this.totalInput.addEventListener('change', () => {
    //         this.counter(Number(this.totalInput.value));
    //     })
    // }
};



