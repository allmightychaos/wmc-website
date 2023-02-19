const shoppingCartDiv = document.querySelector('.shopping-cart-div');

shoppingCartDiv.addEventListener('mouseover', function() {
  shoppingCartDiv.style.right = '0';
});

shoppingCartDiv.addEventListener('mouseout', function() {
  shoppingCartDiv.style.right = '-105px';
});


window.addEventListener("scroll", function() {
    const navbar = document.querySelector("#navbar");
    const notchbar = document.querySelector("#navbar-notch");
  
    if (window.scrollY > 100) {
      navbar.classList.remove("fade-in");
      navbar.classList.add("fade-out");
  
      notchbar.classList.remove("fade-out");
      notchbar.classList.add("fade-in");

    } else {
      navbar.classList.remove("fade-out");
      navbar.classList.add("fade-in");
  
      notchbar.classList.remove("fade-in");
      notchbar.classList.add("fade-out");

      shoppingCartDiv.style.top = '150px'; 
    }
});

window.onscroll = function() {
  const pageYOffset = window.pageYOffset;

  const shoppingCartDiv = document.querySelector('.shopping-cart-div');
  const shoppingCartDivTop = parseInt(shoppingCartDiv.style.top, 10) || 0;
  
  if (shoppingCartDivTop >= 50 && shoppingCartDivTop <= 150) {
    shoppingCartDiv.style.top = Math.max(50, shoppingCartDivTop - pageYOffset) + 'px';
  }
  else if (shoppingCartDivTop < 50) {
    shoppingCartDiv.style.top = '50px';
  }
  else if (shoppingCartDivTop > 150) {
    shoppingCartDiv.style.top = '150px';
  }
};

window.onload = function() {
  const aboutNavbarButton = document.querySelector('.navbar-about');
  const contactNavbarButton = document.querySelector('.navbar-contact');

  const homeNotchButton = document.querySelector('.notch-home');
  const aboutNotchButton = document.querySelector('.notch-about');
  const contactNotchButton = document.querySelector('.notch-contact');

  const homeSection = document.querySelector('#landing-page');
  const aboutSection = document.querySelector('#about');
  const contactSection = document.querySelector('#contact');

  aboutNavbarButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: aboutSection.offsetTop,
      behavior: 'smooth'
    });
  });

  contactNavbarButton.addEventListener('click', (event) => {
    event.preventDefault();

    window.scrollTo({
      top: contactSection.offsetTop,
      behavior: 'smooth'
    });
  });

  homeNotchButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: homeSection.offsetTop,
      behavior: 'smooth'
    });
  });

  aboutNotchButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: aboutSection.offsetTop,
      behavior: 'smooth'
    });
  });

  contactNotchButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: contactSection.offsetTop,
      behavior: 'smooth'
    });
  });
};