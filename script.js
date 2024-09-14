
window.onload = function(){

    let images = document.getElementsByClassName('diashow');
    let number = images.length;
    let count = 0;

    setInterval(function(){

        images[count].classList.remove('active');
        images[count].classList.add('hidden');
        
        count = (count + 1) % number;
        
        images[count].classList.remove('hidden');
        images[count].classList.add('active');

    }, 4000)
    
}

