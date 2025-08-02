// Responsive Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
  });
}
// ... existing code ...

// Fade-in on scroll for sections and cards
function revealOnScroll() {
    const fadeEls = document.querySelectorAll('.fade-in, .project-card, .skill');
    const windowHeight = window.innerHeight;
    fadeEls.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 60) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.transition = 'opacity 0.8s, transform 0.8s';
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('DOMContentLoaded', () => {
    // Animate hero content
    document.querySelectorAll('.hero-content h1, .hero-content p, .hero-content .btn').forEach((el, i) => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = `opacity 0.8s ${0.2 + i * 0.3}s, transform 0.8s ${0.2 + i * 0.3}s`;
    });
    revealOnScroll();
  });
  
  // Project card popup modal
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="modal-close">&times;</span>
          <img src="${card.querySelector('img').src}" alt="${card.querySelector('h3').textContent}" style="width:100%;border-radius:12px;">
          <h3>${card.querySelector('h3').textContent}</h3>
          <p>${card.querySelector('p').textContent}</p>
          <a href="#" class="btn" style="margin-top:1rem;">Visit Project</a>
        </div>
      `;
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';
      modal.querySelector('.modal-close').onclick = () => {
        modal.remove();
        document.body.style.overflow = '';
      };
      modal.onclick = (e) => {
        if (e.target === modal) {
          modal.remove();
          document.body.style.overflow = '';
        }
      };
    });
  });
  
  // Skill tooltips
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
      const tooltip = document.createElement('div');
      tooltip.className = 'skill-tooltip';
      tooltip.textContent = `I have experience with ${skill.textContent}`;
      document.body.appendChild(tooltip);
      const rect = skill.getBoundingClientRect();
      tooltip.style.left = rect.left + window.scrollX + rect.width / 2 + 'px';
      tooltip.style.top = rect.top + window.scrollY - 36 + 'px';
      tooltip.style.transform = 'translateX(-50%)';
      skill._tooltip = tooltip;
    });
    skill.addEventListener('mouseleave', () => {
      if (skill._tooltip) {
        skill._tooltip.remove();
        skill._tooltip = null;
      }
    });
  });
  
  // ... existing code ...