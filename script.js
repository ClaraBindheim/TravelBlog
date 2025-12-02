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
    }, 4000);


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

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;

                    console.log(img.src);

                    img.classList.remove('lazy');
                    img.classList.add('lazy-loaded');

                    observer.unobserve(img);
                }
            });

        }, {threshold: 1.5});


        containers.forEach(container => {
            const type = container.dataset.type;
            const images = container.dataset.images.split(',');
            const imagePaths = images.map(num => `images/Australia/${num.trim()}_compressed.webp`);
            const text = container.dataset.text;

            container.classList.add(type);

            if (text && text.trim() !== '') {

                imagePaths.forEach(path => {
                    const img = document.createElement('img');
                    img.dataset.src = path;
                    img.alt = '';
                    container.appendChild(img);

                    observer.observe(img);
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
                    img.dataset.src = path;
                    img.alt = '';
                    div1.appendChild(img);

                    observer.observe(img);
                });

                const thirdImage = document.createElement('img');
                thirdImage.dataset.src = imagePaths[2];
                thirdImage.alt = '';
                div2.appendChild(thirdImage);
                observer.observe(thirdImage);

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
                    img.dataset.src = path;
                    img.alt = '';
                    div1.appendChild(img);

                    observer.observe(img);
                });

                const secondTwoImages = imagePaths.slice(2, 4);
                secondTwoImages.forEach(path => {
                    const img = document.createElement('img');
                    img.dataset.src = path;
                    img.alt = '';
                    div2.appendChild(img);

                    observer.observe(img);
                });

                container.appendChild(div1);
                container.appendChild(div2);
            }
            else {

                imagePaths.forEach(path => {
                    const img = document.createElement('img');
                    img.dataset.src = path;
                    img.alt = '';
                    container.appendChild(img);

                    observer.observe(img);
                });
            }

        }); 

    } 


    fillContainers();

};
