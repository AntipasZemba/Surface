```markdown
# Surface — Full Service Creative Agency Website

Surface is a modern, responsive, multi-page website for **Surface**, a full-service creative agency specializing in web design, branding, UX/UI, and development.

This project showcases a high-impact digital presence with animated backgrounds, smooth navigation overlays, portfolio case studies, service plans, and a client-focused contact flow.

---

## 🌐 Live Preview

Deployed on Netlify:  
👉 https://surface-io.netlify.app/

---

## 📌 Project Overview

The Surface website is built as a static multi-page site using:

- **HTML5**
- **CSS3 (custom styling & animations)**
- **Vanilla JavaScript**
- **Responsive design principles**
- **SEO & social meta optimization**

It is optimized for performance, clarity, and modern aesthetics.

---

## 📂 Project Structure

/ (root)
│
├── index.html # Homepage
├── about.html # About & Team page
├── casestudies.html # Portfolio / Case Studies
├── contact.html # Contact form (mailto integration)
├── service.html # Services & Plans page
│
├── style/
│ └── styles.css # Main stylesheet
│
├── JS/
│ └── script.js # Shared JavaScript
│
├── assets/
│ ├── images
│ └── favicon2.png
│
└── README.md

---

## 🧩 Pages Breakdown

### 1. Home (`index.html`)
- Hero section with animated background
- Fullscreen overlay navigation
- CTA button for project inquiries
- SEO + Open Graph + Twitter meta tags

### 2. About (`about.html`)
- Agency mission
- Team member section
- Clean minimal layout
- Animated gradient background

### 3. Portfolio (`casestudies.html`)
Includes selected projects:

- **Canlis**
- **La • Kate**
- **Hodavia Kaseya Portfolio**
- **Restaurant KI**

Each project includes:
- Visual preview
- Description
- Service tags
- External project link

### 4. Services (`service.html`)
- Value proposition section
- 6-step website process
- Website build packages
- Maintenance plans
- Clear CTAs for lead generation

### 5. Contact (`contact.html`)
- Accessible contact form
- Mailto-based submission
- Prefilled subject + body
- Mobile header hide/show interaction

---

## 🎨 Key Features

- Fully responsive design
- Animated gradient backgrounds
- Wave animation effects
- Smooth fullscreen navigation overlay
- SEO-ready metadata
- Hreflang support (EN / FR)
- Open Graph & Twitter Card integration
- Accessibility considerations (ARIA labels)
- Clean, performance-focused layout
- Mailto-powered lead capture

---

## ⚙️ How It Works

### Navigation System
All pages use a fullscreen overlay menu controlled by JavaScript:

```javascript
menuOpen.addEventListener('click', () => {
  navOverlay.classList.add('active');
});
````

### Contact Form

The contact form encodes user input and opens the user's default mail client:

```javascript
window.location.href = `my@email.com?subject=${subject}&body=${body}`;
```

This keeps the site fully static while enabling inquiries.

---

## 🚀 Deployment

This site is designed for static hosting platforms such as:

* Netlify
* Vercel
* GitHub Pages
* Any standard web server

To deploy on Netlify:

1. Push project to GitHub
2. Connect repository to Netlify
3. Set publish directory to root
4. Deploy

---

## 🔎 SEO Optimization

Each page includes:

* Meta description
* Canonical link
* Hreflang attributes
* Open Graph tags
* Twitter Card metadata

Optimized for search engines and social sharing.

---

## 📱 Responsiveness

Designed mobile-first with:

* Flexible grid layouts
* Media queries
* Adaptive header behavior
* Touch-friendly navigation

---

## 🧠 Design Philosophy

Surface focuses on:

* Clarity over clutter
* Performance over bloat
* Simplicity over overengineering
* Clean typography
* Subtle, modern animations

---

## 📄 License

This project is for Surface portfolio agency use ONLY.
All branding and content belong to Surface.

---

## 👥 Team

Surface is built by a small, frontend-focused team passionate about:

* Web Design
* Branding
* UX/UI
* Front-end Development
* Full-stack Solutions

---

## 📬 Contact

For collaborations or inquiries:

📧 [Email ME](mailto:antipaszemba@icloud.com)
🌐 [Website](https://surface-io.netlify.app/)

---

© 2026 Surface — Full Service Creative Agency

```
```
