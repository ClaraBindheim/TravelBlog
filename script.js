
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

      
function fillContainers() {

  const containers = document.querySelectorAll('.image-container');
  
    containers.forEach(container => {
      const type = container.dataset.type;
      const images = container.dataset.images.split(',');
      const imagePaths = images.map(num => `images/Australia/${num.trim()}_compressed.webp`);
      const text = container.dataset.text;

      container.classList.add(type);

      const observer = new IntersectionObserver(entries =>{

        entries.forEach(entry => {


          entry.target.classList.toggle('lazy', entry.isIntersecting);
          console.log(entry, entry.isIntersecting);
        })
        
      })

      containers.forEach(container => {

        observer.observe(container);
      })

        if(text && text.trim() !== ''){

         imagePaths.forEach(path => {
            const img = document.createElement('img');
            img.src = path;
            img.alt = '';
            img.classList.add('lazy');
            container.appendChild(img);
          });

        const p = document.createElement('p');
        p.textContent = text;

        const textDiv = document.createElement('div');
        textDiv.id = 'text';

        textDiv.appendChild(p);

        container.appendChild(textDiv);
      }
      else if (type === 'three-images') {

        const div1 = document.createElement('div');
        div1.classList.add('first-row');
        const div2 = document.createElement('div');
        div2.classList.add('second-row');
      
        const firstTwoImages = imagePaths.slice(0, 2);
        firstTwoImages.forEach(path => {
          const img = document.createElement('img');
          img.src = path;
          img.alt = '';
          img.classList.add('lazy');
          div1.appendChild(img);
        });
      
        const thirdImage = document.createElement('img');
        thirdImage.src = imagePaths[2];
        thirdImage.alt = '';
        thirdImage.classList.add('lazy');
        div2.appendChild(thirdImage);
      
        container.appendChild(div1);
        container.appendChild(div2);
      }
      else if (type === 'four-images') {

        const div1 = document.createElement('div');
        div1.classList.add('first-row');
        const div2 = document.createElement('div');
        div2.classList.add('second-row');
      
        const firstTwoImages = imagePaths.slice(0, 2);
        firstTwoImages.forEach(path => {
          const img = document.createElement('img');
          img.src = path;
          img.alt = '';
          img.classList.add('lazy');
          div1.appendChild(img);
        });
      
        const secondTwoImages = imagePaths.slice(2, 4);
        secondTwoImages.forEach(path => {
            const img = document.createElement('img');
            img.src = path;
            img.alt = '';
            img.classList.add('lazy');
            div2.appendChild(img);
          });
      
        container.appendChild(div1);
        container.appendChild(div2);
      }
      else{

        imagePaths.forEach(path => {
            const img = document.createElement('img');
            img.src = path;
            img.alt = '';
            img.classList.add('lazy');
            container.appendChild(img);
          });
      } 

    });
    
  }
  
  fillContainers();
}





