const root = document.documentElement,
      bar = document.querySelector('.bar'),
      barItems = document.querySelectorAll('.bar span'),
      menu = document.querySelector('.menu'),
      contacts = document.querySelector('.contacts');
bar.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    bar.classList.toggle('bar-active');
    menu.classList.toggle('menu-active');
    contacts.classList.toggle('contacts-active');
    document.body.classList.toggle('body-active');
    root.style.setProperty('--topDinamic', nav.offsetHeight  + "px");
    root.style.setProperty('--topDinamicTwo', nav.offsetHeight + menu.offsetHeight  + "px");
})

