// back to top
window.onscroll = () => {
    toggleTopButton();
}
function scrollToTop() {
    const heroSection = document.getElementById('hero');
    heroSection.scrollIntoView({ behavior: 'smooth' });
}


function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-up').classList.remove('d-none');
    } else {
        document.getElementById('back-to-up').classList.add('d-none');
    }
}


// nav active class
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.navbar-nav .nav-item');


    navItems.forEach(function (navItem) {

        navItem.addEventListener('click', function () {

            navItems.forEach(function (item) {
                item.classList.remove('active');
            });


            this.classList.add('active');
        });
    });
});

// nav scroll snap transition
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href'); // Get target section id
            const targetSection = document.querySelector(targetId); // Get target section element

            if (targetSection) {
                // Scroll to the target section with smooth behavior
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// x axis scroller snap
// document.addEventListener("DOMContentLoaded", function () {
//     // Get all nav items
//     const navItems = document.querySelectorAll('.navbar-nav .nav-item');

//     // Loop through each nav item
//     navItems.forEach(function (navItem) {
//         // Add click event listener to each nav item
//         navItem.addEventListener('click', function () {
//             // Remove 'active' class from all nav items
//             navItems.forEach(function (item) {
//                 item.classList.remove('active');
//             });

//             // Add 'active' class to the clicked nav item
//             this.classList.add('active');
//         });
//     });

//     // Scroll event listener for hiding/showing the back to top button
//     window.addEventListener('scroll', function () {
//         toggleTopButton();
//     });

//     // Function to scroll to top smoothly
//     function scrollToTop() {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     }

//     // Function to toggle back to top button visibility
//     function toggleTopButton() {
//         const backButton = document.getElementById('back-to-up');
//         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//             backButton.classList.remove('d-none');
//         } else {
//             backButton.classList.add('d-none');
//         }
//     }
// });
