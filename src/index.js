import './less/index.less'

// Your code goes here!
// BACKGROUND
// const mainbackground = document.querySelector('.home')
// console.log(mainbackground)

// mainbackground.addEventListener('click', function onClick(event) {
//     event.target.style.backgroundColor = 'lightblue';
// })
// mainbackground.addEventListener('dblclick',
// function offClick(event) {
//     event.target.style.backgroundColor = 'yellow'
// })

// mainbackground.addEventListener('mouseover',
// function offMouse(event) {
//     event.target.style.backgroundColor = 'lightgreen'
// })


// loading.....

window.onload = function (event) {
    console.log(`event ${event.type} fired!`)
    const heading = document.querySelector('h1')
    heading.textContent ='READY TO GO'

// copy
window.addEventListener('copy', () => {
    // navigator is a global object that is availible.
    // navigator has a clipboard object which has a 
    // readText method which returns a promise.
    navigator.clipboard.readText()
    .then(text => {
        // console.log(text)
        heading.textContent += text
    })
 })
 


document.body.addEventListener('click', event => {
    event.target.classList.toggle('mirror')
    
})

document.body.addEventListener('dblclick', event => {
    event.textContent = 'Sorry Sucka'
    
})

document.body.addEventListener('dblclick', event => {
    event.target.innerHTML = ''
})

window.addEventListener('keydown', event => {
    if(event.key === 'Escape'){
        logoHeading.textContent = ''
    }
})

window.addEventListener('keydown', event => {
    if(event.key === 'l'){
        logoHeading.textContent = 'Sorry Sucka!!!!'
    }
})

document.body.addEventListener('mousemove', event => {
    const { clientX, clientY} = event
    // console.log (`mouse is at ${clientX}, ${clientY}`) 
})

const destinations = document.querySelectorAll('.destination')
for(let destination of destinations) {
    destination.addEventListener('mouseenter', event => {
        destination.style.fontWeight = 'bold'
    })
    
        destination.addEventListener('mouseleave', event => {
            destination.style.fontWeight = 'normal'
        })
}
 

}
// // H1 HEADING {????????????}
// const logoHeading = document.querySelector('.logo-heading');
// console.log(logoHeading)





// // NAVAGATION BAR
// const navA = document.querySelectorAll('nav a');
// console.log(navA)

// navA[0].addEventListener('mouseover',
// function navColorChange(event) {
//     event.target.style.color = 'red'
// })

// navA[1].addEventListener('mouseover',
// function navColorChange(event) {
//     event.target.style.color = 'blue'
// })

// navA[2].addEventListener('mouseover',
// function navColorChange(event) {
//     event.target.style.color = 'green'
// })

// navA[3].addEventListener('mouseover',
// function navColorChange(event) {
//     event.target.style.color = 'purple'
// })



// // ------------!!!!!!!!!!!!!!!!!!
// window.keypress = function (event) {
//     console.log(`event ${event.type} started!`)
    
//     if(navA === 'Escape'){
//         navA[0].target.style.backgroundColor = 'black'
//     }
// }



// // MAIN IMAGE
// const newImage = document.querySelector('.intro img');
// console.log(newImage)

// newImage.addEventListener('onkeydown', (event) => {
//     console.log(event.keyCode) 
// })

// // H2 HEADINGS
// const newH2 = document.querySelector('.intro h2');
// console.log(newH2)

// // ARTICLE TEXT
// const newText = document.querySelectorAll('.text-content');
// console.log(newText)

// // ARTICLE IMAGES
// const newImageContent = document.querySelectorAll('.img-content');
// console.log(newImageContent)




