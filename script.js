
window.onload = function(){

    let images = document.getElementsByClassName('diashow');
    let number = images.length;
    let count = 0;

    setInterval(function(){

        if (images.length > 0 && images.length > 0) {
            
            images[count].classList.remove('active');
            images[count].classList.add('hidden');
            
            count = (count + 1) % number;
            
            images[count].classList.remove('hidden');
            images[count].classList.add('active');
    
        
        }
        

      
    }, 4000)


    let menu = document.getElementsByClassName('menuIcon');
    let links = document.getElementsByClassName('headlineLinks');

    if (menu.length > 0 && links.length > 0) {

        menu[0].addEventListener("click", function () {
            links[0].classList.remove('closed');
            links[0].classList.add('open');
            menu[0].classList.remove('open');
            menu[0].classList.add('closed');
            menu[1].classList.remove('closed');
            menu[1].classList.add('open');
        });

        menu[1].addEventListener("click", function () {
            links[0].classList.remove('open');
            links[0].classList.add('closed');
            menu[0].classList.remove('closed');
            menu[0].classList.add('open');
            menu[1].classList.remove('open');
            menu[1].classList.add('closed');
        });
    

    }



//Änderung: Es dauert zu lange Bilder einzeln hinzuzufügen... Ab Great Ocean road Bilder anders eingefügt    
function fillContainers() {

    const containers = document.querySelectorAll('.image-container');
  
    containers.forEach(container => {
      const type = container.dataset.type;
      const images = container.dataset.images.split(',');
      const imagePaths = images.map(num => `images/Australia/${num.trim()}.jpg`);
      const text = container.dataset.text;

      container.classList.add(type);
    
      imagePaths.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = '';
        container.appendChild(img);
      });

      if(text !== undefined || text !== null){

        const p = document.createElement('p');
        p.textContent = text;

        const textDiv = document.createElement('div');
        textDiv.id = 'text';

        textDiv.appendChild(p);

        container.appendChild(textDiv);
      }

    });
    
  }
  
  fillContainers();
}





