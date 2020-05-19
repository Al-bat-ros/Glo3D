const togglePopUp = () => {
    const popupContent = document.querySelector('.popup-content'),
          popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn');
          let count = 0.01;
    
    const animPopup = () =>{
        if(document.documentElement.scrollWidth > 768){
            let requestId = requestAnimationFrame(animPopup);
            count += 0.03;
            popupContent.style.opacity = count;
            if(Math.floor(count) === 1){
                cancelAnimationFrame(requestId);
                count = 0.01;
            }  
        }  
    }
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
          popup.style.display = 'block';
          animPopup();
        });
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if(!target){
                popup.style.display = 'none';
            }
        }


    });

};

export default togglePopUp;