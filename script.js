const btn = document.querySelector("button");
btn.addEventListener('click', function(){



var image = ['https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-cartoon-panda-sleep-png-image_6102474.png',
              'https://i.pinimg.com/736x/2d/77/68/2d7768e4499f010c1d7eee873676e00e.jpg',
              'https://png.pngtree.com/png-vector/20230926/ourmid/pngtree-doraemon-cartoon-isolated-in-white-png-image_10147490.png',
              'https://freepngimg.com/thumb/categories/402.png',

];

const img = document.createElement('img');
img.src = image[Math.floor( Math.random() * image.length)];

var randomX = Math.floor( Math.random() * 90);
var randomY = Math.floor( Math.random() * 90);
var rotateAll = Math.floor( Math.random() * 360);



img.style.top = randomY + '%';
img.style.left = randomX + '%';
img.style.transform = `rotate(${rotateAll}deg)`;
img.style.height = '150px';
img.style.position = 'absolute';

document.querySelector('body').appendChild(img);
})
   



    


    











