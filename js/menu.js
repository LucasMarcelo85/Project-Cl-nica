let navclinica = document.querySelector('#header')


document.addEventListener('scroll'), () =>{
    let scrollTop = Window.scrollY

    if (scrollTop > 0) {
        navclinica.classList.add('rolar')
    } else{
        navclinica.classList.remove('rolar')
    }

}