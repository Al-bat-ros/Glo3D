const smoothScroll = () => {

    const menu = document.querySelector('menu');
   
    menu.addEventListener('click', (event) => {
        let target = event.target; 
        event.preventDefault(); 
        
        const hrefID = target.getAttribute('href');
    
        document.querySelector('' + hrefID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        }) 
        
    });
}
export default smoothScroll;
