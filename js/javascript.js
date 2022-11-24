const root = document.documentElement,
      bar = document.querySelector('.bar'),
      barItems = document.querySelectorAll('.bar span'),
      menu = document.querySelector('.menu');
bar.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    bar.classList.toggle('bar-active');
    menu.classList.toggle('menu-active');
    root.style.setProperty('--topDinamic', nav.offsetHeight  + "px")
    console.log(nav.offsetHeight);
})

