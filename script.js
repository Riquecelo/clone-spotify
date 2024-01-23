const lista = document.querySelectorAll('.playlist section')
const container = document.querySelector('.playlist')
const sua_bibioteca = document.querySelector('.sua_biblioteca')


container.addEventListener('scroll', function (){
console.log('cheguei ' + lista[0].getBoundingClientRect().top)
    if(lista[0].getBoundingClientRect().top < 251){
        sua_bibioteca.classList.add('sombra')
        
    } else if(lista[0].getBoundingClientRect().top >= 251){
        sua_bibioteca.classList.remove('sombra')
        
    }
})
