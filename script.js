const ancors = document.querySelectorAll('.menu-container li a')
const menu_container = document.querySelector('.menu-container')
const main = document.querySelector('main')
const toggle = document.querySelector('.toggle')

ancors.forEach(ancors=>{
    ancors.onclick=()=>{
        toggle.children[0].classList.remove('click')
        toggle.classList.remove('click')
    }
})

main.onscroll = (e) =>{
    let y = Math.round(main.scrollTop / main.clientHeight)
    ancors.forEach(ancors=>ancors.classList.remove('click'))
    ancors[y].classList.add('click')
}

toggle.onclick = () =>{
    toggle.children[0].classList.toggle('click')
    toggle.classList.toggle('click')
}