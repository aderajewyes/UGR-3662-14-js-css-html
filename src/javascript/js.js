
function toggleNavigation() {
    var navigationList = document.querySelector('.navigation--list');
    navigationList.classList.toggle('active');
  }

  function changeBackgroundColor() {
    
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var bodyB = document.querySelector('main')
    bodyB.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    
  }
  setInterval(changeBackgroundColor, 7000);

  window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 5) {
      nav.style.backgroundColor = '#777';
    } else {
      nav.style.backgroundColor = '#333';
    }
  });
  window.addEventListener('scroll', function () {
    const footer = document.querySelector('.footer');
    if (window.scrollY > 5) {
      footer.style.backgroundColor = '#777';
    } else {
      footer.style.backgroundColor = '#333';
    }
  });