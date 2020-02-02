const smoothScroll = () => {

    const menu = document.querySelector('menu'),
          hrefs = document.querySelectorAll('a[href*="#"]');

    menu.addEventListener('click', (event) => {
        let target = event.target; 
        hrefs.forEach(element => {
            if(element === target && !target.matches('.close-btn')){
                event.preventDefault(); 
                const hrefID = target.getAttribute('href');
                console.log(document.querySelector('' + hrefID));
                document.querySelector('' + hrefID).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                }) ;
            };
        });    
    });
    hrefs[0].addEventListener('click', () => {
        event.preventDefault(); 
        document.querySelector('#service-block').scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}
export default smoothScroll;
