      // hamburger menu
      let navLinks = document.getElementById("navLinks");
      function showMenu() {
        navLinks.style.right = "0";
      }
      function hideMenu() {
        navLinks.style.right = "-200px";
      }
      //highlight current nav page
      var currentURL = window.location.href;

      var navLink = document.querySelectorAll("nav ul li a");

      for (var i = 0; i < navLink.length; i++) {
        if (navLink[i].href === currentURL) {
          navLink[i].classList.add("current-page");
        }
      }