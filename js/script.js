/* ======== menu icon navbaar =========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/* ======== section scroll active link =========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links  => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      }); 
    };
  });
  
/* ======== sticky navbar =========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/* ======== remove menu icon navbaar when click navbar link (scroll) =========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/* ======== dark light mode =========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}

/* ======== scroll reveal =========*/
 ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200   
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/* ======== contact form alert =========*/
document.querySelector('.contact form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const fullName = document.querySelector('input[placeholder="Full Name"]').value.trim();
  const email = document.querySelector('input[placeholder="Email Address"]').value.trim();
  const mobile = document.querySelector('input[placeholder="Mobile Number"]').value.trim();
  const subject = document.querySelector('input[placeholder="Email Subject"]').value.trim();
  const message = document.querySelector('textarea[placeholder="Your Message"]').value.trim();
  
  if (!fullName || !email || !mobile || !subject || !message) {
    Swal.fire({
      title: 'Error!',
      text: 'Please fill in all fields before sending the message.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  } else {
    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
});
