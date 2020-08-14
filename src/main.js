import App from './App.svelte';
import 'bulma/css/bulma.min.css';

const app = new App({
    target: document.body
});

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

// const burger = document.getElementById('navbar-burger');
// burger.addEventListener('click', () => {
//     burger.classList.toggle('is-active');
//     document.getElementById(burger.dataset.target).classList.toggle('is-active');
// });

// const navItems = document.getElementById('menubar').firstElementChild.children,
//     navSections = new Array(navItems.length);
// for (i = 0; i < navItems.length; i++)
//     navSections[i] = document.getElementById(navItems[i].dataset.target);

// const menuBarHeight = document.getElementById('menubar').offsetHeight;

// function isVisible(ele) {
//     const r = ele.getBoundingClientRect();
//     const h = (window.innerHeight || document.documentElement.clientHeight);
//     const w = (window.innerWidth || document.documentElement.clientWidth);
//     return (r.top <= h) &&
//         (r.top + r.height - menuBarHeight >= 0) &&
//         (r.left <= h) &&
//         (r.left + r.width >= 0);
// }

// function activateIfVisible() {
//     for (b = true, i = 0; i < navItems.length; i++) {
//         if (b && isVisible(navSections[i])) {
//             navItems[i].classList.add('is-active');
//             b = false;
//         } else
//             navItems[i].classList.remove('is-active');
//     }
// }

// var isTicking = null;
// window.addEventListener('scroll', () => {
//     if (!isTicking) {
//         window.requestAnimationFrame(() => {
//             activateIfVisible();
//             isTicking = false;
//         });
//         isTicking = true;
//     }
// }, false);

// var isScrolling = null;
// window.addEventListener('scroll', () => {
//     window.clearTimeout(isScrolling);
//     isScrolling = setTimeout(() => {
//         activateIfVisible();
//     }, 80);
// }, false);

// for (item of navItems) {
//     item.addEventListener('click', e => {
//         e.preventDefault();
//         window.scroll({
//             behavior: 'smooth',
//             left: 0,
//             top: document.getElementById(e.target.dataset.target).getBoundingClientRect().top + window.scrollY
//         });
//     });
// }

export default app;