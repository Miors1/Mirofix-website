document.addEventListener('DOMContentLoaded',function(){

    const nav=document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link') // wszystkie linki
    const navList = document.querySelector('.navbar-collapse')  

    
// klikniecie w liste powoduje jej zamkniecie
allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))



window.addEventListener('scroll',addShadow)

})



