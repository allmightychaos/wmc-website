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

    console.log(this.scrollY);
  
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
