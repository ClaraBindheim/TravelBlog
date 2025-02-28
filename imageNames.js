const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'images/NewZealand');

function nameImagesList() {

    return new Promise((resolve, reject) => {

        fs.readdir(folderPath, (err, files) => {
            if (err) {
                return reject(err);
            }
            
            const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
            const images = files.filter(file => 
                imageExtensions.includes(path.extname(file).toLowerCase())
            );


            for(i = 0; i < images.length; i++){

                let oldPath = path.join(folderPath, images[i]);
                let newName = i + path.extname(images[i]);
                let newPath = path.join(folderPath, newName);

                fs.promises.rename(oldPath, newPath);

            }

            resolve(images);
        
        }); 
    });
}

nameImagesList()
   
    







