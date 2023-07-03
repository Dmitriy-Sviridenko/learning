const navMenu = document.getElementById('nav-menu');

if (navMenu){
  const links = navMenu.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    if (links[i].href === window.location.href) {
      links[i].classList.add('nav__link--current');
      break;
    }
  }
} 
