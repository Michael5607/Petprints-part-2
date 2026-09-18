/* ============================================
   PetPrints Animal Rescue - JavaScript
   Part 3: Interactivity, Form Validation, SEO helpers
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ---------- Mobile Navigation Toggle ----------
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('open');
            const isOpen = nav.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
            menuToggle.textContent = isOpen ? '✕ Close' : '☰ Menu';
        });

        // Close menu when a link is clicked (mobile)
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    nav.classList.remove('open');
                    menuToggle.textContent = '☰ Menu';
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // ---------- Active Navigation Highlight ----------
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ---------- Accordion (Interactive Element) ----------
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isOpen = content.classList.contains('open');

            // Close all other accordion items
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('open');
                item.style.maxHeight = null;
            });
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
            });

            // Toggle current
            if (!isOpen) {
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
                this.classList.add('active');
            }
        });
    });

    // ---------- Form Validation (Enquiry & Contact) ----------
    function setupFormValidation(formId) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;

            // Clear previous errors
            form.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

            // Required text/email/textarea fields
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    showError(field, 'This field is required.');
                    isValid = false;
                }
            });

            // Email format
            const emailField = form.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value.trim())) {
                    showError(emailField, 'Please enter a valid email address.');
                    isValid = false;
                }
            }

            // Phone (optional but validate if filled)
            const phoneField = form.querySelector('input[type="tel"]');
            if (phoneField && phoneField.value.trim()) {
                const phonePattern = /^[\d\s\+\-\(\)]{7,15}$/;
                if (!phonePattern.test(phoneField.value.trim())) {
                    showError(phoneField, 'Please enter a valid phone number.');
                    isValid = false;
                }
            }

            // Radio group validation (enquiry type)
            const radioGroup = form.querySelector('input[name="enquiry_type"]');
            if (radioGroup) {
                const checked = form.querySelector('input[name="enquiry_type"]:checked');
                if (!checked) {
                    const firstRadio = form.querySelector('input[name="enquiry_type"]');
                    showError(firstRadio, 'Please select a type of enquiry.');
                    isValid = false;
                }
            }

            if (isValid) {
                // Show success message
                const successMsg = form.querySelector('.success-message') || createSuccessMessage(form);
                successMsg.style.display = 'block';
                successMsg.textContent = 'Thank you! Your enquiry has been received. We will respond within 2–3 working days.';

                // Reset form after short delay
                setTimeout(() => {
                    form.reset();
                    successMsg.style.display = 'none';
                }, 4000);

                // In a real site you would send data via fetch/AJAX here
                console.log('Form submitted successfully (client-side validation passed).');
            }
        });
    }

    function showError(field, message) {
        field.classList.add('invalid');
        let errorEl = field.parentElement.querySelector('.error-message');
        if (!errorEl) {
            errorEl = document.createElement('div');
            errorEl.className = 'error-message';
            field.parentElement.appendChild(errorEl);
        }
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }

    function createSuccessMessage(form) {
        const div = document.createElement('div');
        div.className = 'success-message';
        form.insertBefore(div, form.firstChild);
        return div;
    }

    // Apply validation to both forms
    setupFormValidation('enquiryForm');
    setupFormValidation('contactForm');

    // ---------- Simple Search / Filter (for services or future animal listings) ----------
    const searchInput = document.getElementById('serviceSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const term = this.value.toLowerCase();
            document.querySelectorAll('.content-block, .accordion-item').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(term) ? '' : 'none';
            });
        });
    }

    // ---------- Smooth scroll for internal links ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
