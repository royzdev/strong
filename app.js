particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 25,
            "density": {
                "enable": true,
                "value_area": 200
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 4
            },
            "image": {
                "src": "img/github.svg",
                "width": 115,
                "height": 38
            }
        },
        "opacity": {
            "value": 0.1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 2,
                "opacity_min": 0.1,
                "sync": true
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.8,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 12.5,
            "color": "#ffffff",
            "opacity": 0.12,
            "width": 3
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 16,
                "rotateY": 35.5
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
                "distance": 62.5,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 80,
                "size": 9.5,
                "duration": 2,
                "opacity": 5,
                "speed": 4.1
            },
            "repulse": {
                "distance": 75.1,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 2.1
            },
            "remove": {
                "particles_nb": 3.4
            }
        }
    },
    "retina_detect": true
});
