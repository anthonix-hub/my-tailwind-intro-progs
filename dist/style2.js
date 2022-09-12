const ham = document.querySelector('#ham')
const sideMenu = document.querySelector('#sideMenu')
const body = document.querySelector('#body')

ham.addEventListener('click', () => {
    if (sideMenu.classList.contains('hidden')) {
        sideMenu.classList.remove('hidden');
    }else{
        sideMenu.classList.add('hidden');
    }
});

