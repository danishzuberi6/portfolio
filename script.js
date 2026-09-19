const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

document.getElementById('year').textContent = new Date().getFullYear();

const emailLinks = document.querySelectorAll('.mailto-link');
emailLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=danishzuberi6@gmail.com';
    const mailtoUrl = 'mailto:danishzuberi6@gmail.com';

    const popup = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    if (!popup) {
      window.location.href = mailtoUrl;
    }
  });
});

const callLinks = document.querySelectorAll('.call-link');
callLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'tel:+919754600584';
  });
});
