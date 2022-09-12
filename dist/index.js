const hamburg = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')


hamburg.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})


const recipy_panel = document.querySelector('#recipy_panel')
const recipy_card = document.querySelector('#recipy_card')

recipy_panel.addEventListener('mouseenter', () => {
    if (recipy_card.classList.contains('hidden')) {
        recipy_card.classList.remove('hidden');
    }else{
        recipy_card.classList.add('hidden');
    }
})
recipy_panel.addEventListener('mouseleave', () => {
    if (recipy_card.classList.contains('hidden')) {
        recipy_card.classList.remove('hidden');
    }else{
        recipy_card.classList.add('hidden');
    }
})


