const qeza = new Audio('qeza.mp3')
const range1 = new Audio('range.mp3')
const chevrolet = document.querySelector('.chevrolet')
const range = document.querySelector('.range')
const avaria = document.querySelector('.avaria-img')
const aye = () => document.querySelector('.balaeli').classList.add('balaeli-start')

avaria.addEventListener('click',function () {
    setTimeout(() => {
        qeza.play()
    }, 1000);
    setTimeout(() => {
        range.classList.add('left1')
        chevrolet.classList.add('right1')
    }, 2000);
    setTimeout(() => {
        aye()
        range1.play()
    }, 4000);
})

// for (let i = 0; i < avaria.length; i++) {
    
// avaria[i].onclick=function () {
//     range.classList.add('left1')
//     chevrolet.classList.add('right1')

//     setTimeout(() => {
//         aye()
//     }, 1000);
// }
// }


