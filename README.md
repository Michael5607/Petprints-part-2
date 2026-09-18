# PetPrints Animal Rescue – Website Project

## Student Information
- **Full Name:** Michael Khomani
- **Student Number:** ST105167896
- **Module:** WEDE5020POE
- **Institution:** The Independent Institute of Education (Pty) Ltd
- **Programme:** DINM
- **Date:** September 2026

---

## Project Overview
This website has been developed for **PetPrints Animal Rescue**, a non-profit organisation dedicated to rescuing, rehabilitating, and rehoming abandoned and abused animals across South Africa.

The website serves as the organisation’s primary digital presence. It helps the public learn about the shelter’s work, view the services offered, enquire about adopting an animal, volunteering, fostering or becoming a sponsor, and easily find contact information and locations.

This repository contains the complete work for **Part 1, Part 2 and Part 3** of the Portfolio of Evidence.

---

## Website Goals and Objectives
- Establish a professional and trustworthy online presence for the rescue organisation.
- Increase awareness of the organisation’s mission and the animals in its care.
- Encourage adoptions, volunteer applications, fostering and sponsorships through clear enquiry forms.
- Provide transparent information about the organisation’s history, mission, vision, values and team.
- Make it easy for visitors to contact the shelter and find physical locations (more than one location).
- Deliver a fully responsive, accessible and SEO-friendly experience across desktop, tablet and mobile devices.

---

## Key Features and Functionality

### Part 1 – HTML Structure
- Five core HTML pages with semantic structure (`header`, `nav`, `main`, `footer`)
- Consistent navigation across all pages
- Enquiry form for adoption / volunteer / sponsor / foster
- Contact form and dual-location information
- Meaningful HTML comments and clean indentation

### Part 2 – CSS Styling & Responsive Design
- External stylesheet (`css/style.css`) linked to all pages
- CSS reset for cross-browser consistency
- Typography using **Cherry Bomb One** font for titles
- Colour scheme: Cyan background (`#00F0FF`), Chili red accents (`#C21807`), Hot pink titles (`#FF69B4`), Black header/footer
- Layout using Flexbox and CSS Grid
- Visual styles (cards, buttons, forms, hover/focus states, box-shadows)
- Fully responsive design with media queries (desktop / tablet / mobile)
- Relative units (`rem`, `%`, `clamp`) for fluid scaling
- Mobile hamburger menu

### Part 3 – JavaScript, Forms & SEO
- Client-side form validation (required fields, email, phone, radio groups)
- Success and error messaging for forms
- Interactive accordion on the Services page
- Mobile menu toggle
- Active navigation highlighting
- Simple search/filter on the Services page
- On-page SEO (meta descriptions, keywords, semantic headings, descriptive alt text)
- `robots.txt` and `sitemap.xml`
- Ready for deployment (Netlify / GitHub Pages)

---

## File Structure

```
petprints/
├── index.html              → Homepage
├── about.html              → About Us
├── services.html           → Services
├── enquiry.html            → Adoption / Volunteer / Sponsor Enquiry
├── contact.html            → Contact Us
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── socialising-800x630.jpg
│   ├── puppy-glasses.jpg
│   ├── bunny-cap.jpg
│   ├── ferrets.jpg
│   └── kittens-costume.jpg
└── README.md
```

---

## Changelog

### [Part 1 – Initial Submission] – August 2026
- Created project folder structure
- Built five core HTML pages with semantic structure
- Implemented consistent navigation across all pages
- Added enquiry form with options for adoption, volunteering, sponsorship and fostering
- Populated pages with researched content and placeholder images
- Added HTML comments explaining code sections
- Created and maintained this README.md
- Initial commit and push to private GitHub repository

### [Part 2 – CSS Styling & Responsive Design] – September 2026
- Created external stylesheet `css/style.css` and linked it to all HTML pages
- Applied CSS reset for consistent cross-browser rendering
- Established base typography, colour scheme and spacing system
- Implemented Flexbox and CSS Grid layouts for header, cards, team grid, locations and gallery
- Added visual styles (cards, buttons, forms, hover/focus states, box-shadows)
- Built fully responsive design with media queries for tablet (≤768px) and mobile (≤480px)
- Added mobile hamburger menu toggle
- Used relative units (`rem`, `%`, `clamp`) for fluid scaling
- Applied custom colour scheme (cyan background, chili red accents, hot pink titles)
- Integrated Cherry Bomb One font for all titles
- Updated README with Part 2 details

### [Part 3 – Enhancing Functionality & SEO] – September 2026
- Created `js/script.js` and linked it to all pages
- Implemented client-side form validation for both enquiry and contact forms
- Added success and error messaging for form submissions
- Built interactive accordion component on the Services page
- Added mobile navigation toggle functionality
- Implemented active page highlighting in the navigation
- Added simple search/filter functionality on the Services page
- Enhanced on-page SEO (meta descriptions, keywords, semantic heading structure, descriptive alt text)
- Added `robots.txt` and `sitemap.xml`
- Added animal photo gallery on the homepage and About page
- Prepared site for free deployment (Netlify / GitHub Pages)
- Updated README with Part 3 details and full feature list

---

## Screenshots
*(Add your screenshots here after testing)*

- **Desktop view:**  
  ![Desktop Screenshot](images/screenshot-desktop.png)

- **Tablet view:**  
  ![Tablet Screenshot](images/screenshot-tablet.png)

- **Mobile view:**  
  ![Mobile Screenshot](images/screenshot-mobile.png)

---

## How to View the Website Locally
1. Clone or download this repository
2. Open the `petprints` folder in Visual Studio Code
3. Install the **Live Server** extension (by Ritwick Dey)
4. Right-click `index.html` → “Open with Live Server”

Alternatively, open `index.html` directly in any modern browser.

---

## Deployment
The site is ready to be deployed to any static hosting platform such as:
- **Netlify** (recommended – drag and drop the folder)
- **GitHub Pages**
- Vercel

**Live website link:** *[Add your live URL here after deployment]*  
**GitHub repository:** *[Add your GitHub repo link here]*

---

## References
- Assignment Brief: WEDE5020POE Portfolio of Evidence (The Independent Institute of Education, 2026)
- Content inspiration drawn from publicly available information on South African animal welfare organisations
- Images: Stock / placeholder images used for demonstration purposes
- HTML5, CSS3 and JavaScript documentation: [MDN Web Docs](https://developer.mozilla.org)
- Google Fonts – Cherry Bomb One
- Responsive design best practices (Flexbox / Grid)

---

*This project is submitted as part of the WEDE5020POE module requirements.*
