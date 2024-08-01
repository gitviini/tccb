const ancors = document.querySelectorAll('.menu-container li a')
const menu_container = document.querySelector('.menu-container')
const main = document.querySelector('main')

main.onscroll = (e) =>{
    let y = Math.round(main.scrollTop / main.clientHeight)
    ancors.forEach(ancors=>ancors.classList.remove('click'))
    ancors[y].classList.add('click')
}