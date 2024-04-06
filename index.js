const btn = document.querySelector('.btn');
const color = document.querySelector('.color');
const body = document.querySelector('.body');

const colorBody = ['A', 'B', 'C', 'D', 'F', 'E', 
                    '0', '1', '2', '3', '4', '5', '6','7','8','9']


btn.addEventListener('click', ()=> {
    let hexColor = '#'
    
    for(let i = 0; i < 6; i++) {
        const random = Math.floor((Math.random() * colorBody.length))
        hexColor += colorBody[random]
    }
    
    body.style.backgroundColor = hexColor
    color.textContent = hexColor
})