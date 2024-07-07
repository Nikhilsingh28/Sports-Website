/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
  $(function(){
    $('#scroll,#scroll1,#scroll2').on('click',function(){
      $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 1
      }, 800);
    });
  });
  
  window.onscroll = function() { scrol() };
  
  function scrol() {
    if (document.documentElement.scrollTop > 10) {
      document.getElementById("tifer").style.display = "block";
    } else {
      document.getElementById("tifer").style.display = "none";
    }
  }
  
  function tiger() {
    document.documentElement.scrollTop = 0;
  }
  
  var t = 1;
  p(t);
  
  function s(n) {
    p(t += n);
  }
  
  function c(n) {
    p(t = n);
  }
  
  function p(n) {
    var r = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > r.length) { t = 1; }
    if (n < 1) { t = r.length; }
    for (var i = 0; i < r.length; i++) {
      r[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    r[t - 1].style.display = "block";
    dots[t - 1].className += " active";
  }
  
  function autoSlide() {
    s(1);
  }
  
  // Automatic slideshow (corrected)
  setInterval(autoSlide, 2000);
  
  function open() {
    var containers = document.getElementsByClassName("container");
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.display = "block";
    }
  }
  
  function fun() {
    var containers = document.getElementsByClassName("container");
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.display = "none";
    }
  }
  var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

);